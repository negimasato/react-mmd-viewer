import React, { useContext, useEffect, useState } from 'react';
import { ModelClass } from '../classes/ModelClass';
import { MMDLoader } from '../libs/MMDLoader'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { SkinnedMesh } from 'three';
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';
import { createCanvas, createImageData, Image, ImageData, loadImage } from 'canvas';
import PoseNetPreview from './PoseNetPreview';
import ProjectContext from '../contexts/ProjectContext';
import SelectLoadModelDialog from './SelectLoadModelDIalog';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
        },
            selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

function ModelControl(props:any){

    const classes = useStyles();

    const projectContext = useContext(ProjectContext);

    function onChangeModelSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>){
        projectContext.setactiveModelIndex(event.target.value as number);
    }

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<Image>();

    const [selectLoadModelDialogOpen, setSelectLoadModelDialogOpen] = useState(false);
    const [selectLoadModelDialogValue, setSelectLoadModelDialogValue] = useState<{
        file: File;
        path: string;
        rootDirHandle: any;
    }[]>([]);

    

    async function getFilesFromDir(dirHandle: any,path: string):Promise<{file:File,path:string,rootDirHandle:any}[]> {
        var files:{file:File,path:string,rootDirHandle:any}[] = [];
        for await(var [name, entry] of dirHandle) {
            if (entry.kind === 'file') {
                var extensionIndex = name.lastIndexOf( '.' );
                const extension = extensionIndex < 0 ? '' : name.slice( extensionIndex + 1 ).toLowerCase();
				if(extension === 'pmx' || extension === 'pmd') {
                    var file:File = await entry.getFile();
					files.push({file:file,path:path + name,rootDirHandle:dirHandle});
				}
            } else if (entry.kind === 'directory') {
                const array = await getFilesFromDir(entry,entry.name + '\\');
                files = files.concat(array);
            }
        }
        return files;
    }

    async function onLoadModel(){
        try {
            const subDir = await projectContext.dirHandle.getDirectoryHandle('Models', {create: false});
            const array = await getFilesFromDir(subDir,"");
            setSelectLoadModelDialogValue(array);
            setSelectLoadModelDialogOpen(true);
        } catch(e) {
            console.error(e);
            alert(e);
        }
    }

    function onDeleteModel(){
        if(projectContext.activeModelIndex === -1){
            console.warn('これ以上削除はできない')
            return;
        }
        const newModels = projectContext.models.filter((value, index) => index != projectContext.activeModelIndex);
        const newActiveId = newModels.length - 1;
        projectContext.setModels(newModels);
        projectContext.setactiveModelIndex(newActiveId);
    }

    const handlePoseNetPreviewClose = (newValue?: string) => {
        setOpen(false);
      };

    async function setPosenet(){
        // @ts-ignore
        let fileHandle;
        // @ts-ignore
        [fileHandle] = await window.showOpenFilePicker();
        var file = await fileHandle.getFile();
        const base64Str = await readFileAsDataURL(file);
        if(typeof base64Str === "string"){
            const img = await loadImage(base64Str);
            // console.log(img);
            // const imageData = createImageData(img.width, img.height);
            const canvas = createCanvas(img.width, img.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0);
            const input = tf.browser.fromPixels(ctx.getImageData(0,0,img.width,img.height));
            const net = await posenet.load();
            const pose = await net.estimateSinglePose(input,{
                flipHorizontal: false
            });
            // console.log(props.models[props.activeModelIndex]);
            const mesh:SkinnedMesh = props.models[props.activeModelIndex].mesh;
            for(var keypoint of pose.keypoints){
                console.log(keypoint);
                ctx.beginPath();
                // if(keypoint.part === 'leftElbow' || 
                //     keypoint.part === 'rightElbow' ||
                //     keypoint.part === 'leftShoulder' ||
                //     keypoint.part === 'rightShoulder') {
                //     ctx.arc( keypoint.position.x, keypoint.position.y, 25, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                //     ctx.fillStyle = "red";
                // }
                ctx.arc( keypoint.position.x, keypoint.position.y, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                ctx.fillStyle = "red";
                ctx.fill() ;
            }

            setOpen(true);
            const i = await loadImage(canvas.toDataURL());
            // console.log(i);
            setValue(i);

            
        }
    }

    async function readFileAsDataURL(file:File): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => resolve(fileReader.result);
            fileReader.readAsDataURL(file);
        });
    }
    return (
        <div style={{textAlign: "center"}}>
            <SelectLoadModelDialog 
                open={selectLoadModelDialogOpen}
                setOpen={setSelectLoadModelDialogOpen}
                values={selectLoadModelDialogValue}
            />
            <PoseNetPreview 
                id="ringtone-menu"
                keepMounted
                open={open}
                onClose={handlePoseNetPreviewClose}
                value={value}
            />
            <p style={{fontSize:20,margin:"5px 0px 0px 0px"}}>モデル操作</p>
            <div style={{padding:"0px 10px 10px 10px"}}>
                <FormControl variant="filled" className={classes.formControl}>
                    <div>
                        <Select
                        style={{width:"100%"}}
                        value={projectContext.activeModelIndex}
                        onChange={onChangeModelSelect}
                        native>
                            {projectContext.models.map((model: ModelClass,index: number) => {
                                return(
                                <option key={index} value={index}>{model.modelName}</option>
                            )})}
                        </Select>
                    </div>
                    <div>
                        <Button variant="contained" style={{width:"50%"}} onClick={onLoadModel}>読み込み</Button>
                        <Button variant="contained" style={{width:"50%"}} onClick={onDeleteModel}>削除</Button>
                    </div>
                    {/* <>
                        <Button variant="contained" style={{width:"100%"}} onClick={setPosenet}>PoseNet</Button>
                    </> */}
                </FormControl>
            </div>
        </div>
      );
}
export default ModelControl;
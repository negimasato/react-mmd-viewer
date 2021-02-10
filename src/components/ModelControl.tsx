import React from 'react';
import { ModelClass } from '../classes/ModelClass';
import { MMDLoader } from '../libs/MMDLoader'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { SkinnedMesh } from 'three';

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

    function onChangeModelSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>){
        props.setActiveModelId(event.target.value);
    }

    async function onLoadModel(){
        // @ts-ignore
        const dirHandle = await window.showDirectoryPicker();
        const loader = new MMDLoader();
        try {
            const m:ModelClass = new ModelClass(props.models.length);
            // @ts-ignore
            loader.loadFromDir(dirHandle,(mesh: SkinnedMesh) => {
                m.mesh = mesh;
                const comment = "モデル情報:\n\n" + mesh.geometry.userData.MMD.comment;
                m.comment = comment;
                m.modelName = props.models.length + ':' + mesh.geometry.userData.MMD.modelName;

                const newModels = [...props.models,m];
                const newActiveId = props.activeModelId + 1;
                alert(m.comment);
                props.setModels(newModels);
                props.setActiveModelId(newActiveId);
            });
        } catch(e) {
            console.error(e);
        }
    }

    function onDeleteModel(){
        if(props.activeModelId === -1){
            console.log('これ以上削除はできない')
            return;
        }
        const newModels = props.models.filter((m: ModelClass) => m.id !== props.activeModelId);
        console.log(newModels);
        const newActiveId = props.activeModelId - 1;
        props.setModels(newModels);
        props.setActiveModelId(newActiveId);
    }
    return (
        <div style={{textAlign: "center"}}>
            <p style={{color:"black",fontSize:20,margin:"5px 0px 0px 0px"}}>モデル操作</p>
            <div style={{padding:"0px 10px 10px 10px"}}>
                <FormControl variant="filled" className={classes.formControl}>
                    <div>
                        <Select
                        style={{width:"100%"}}
                        onChange={onChangeModelSelect}
                        native>
                            {props.models.map((model: ModelClass,index: number) => {
                                return(
                                <option key={model.id} value={model.id}>{model.modelName}</option>
                            )})}
                        </Select>
                    </div>
                    <div>
                        <Button variant="contained" style={{width:"50%"}} onClick={onLoadModel}>読み込み</Button>
                        <Button variant="contained" style={{width:"50%"}} onClick={onDeleteModel}>削除</Button>
                    </div>
                </FormControl>
            </div>
        </div>
      );
}
export default ModelControl;
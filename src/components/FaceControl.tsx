import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {  createStyles,  InputLabel, makeStyles, Slider, Theme } from '@material-ui/core';
import { SkinnedMesh } from 'three';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

type Props = {
    label: string;
    morphType: number;
    morphs:any;
    handleChange: (event: any, newValue: number | number[],morphs_array_num: number, selectValue: number ) => void;
    morphSliders: number[];
}
function MorphControl(props : Props) {
    const classes = useStyles();
    const [selectValue, setSelectValue] = useState(-1);
    function onChangeSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>){
        const n = event.target.value;
        if (typeof n === 'string') {
            props.handleChange(null,0,props.morphType,selectValue);
            setSelectValue(Number(n));
        }
    }
    return(
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="label">{props.label}</InputLabel>
            <Select
            labelId="label"
            style={{minWidth: 150}}
            onChange={onChangeSelect}
            value={selectValue}
            native>
                <option key={-1} value={-1}></option>
                {props.morphs.map((value: any,index: number) => {
                    return(
                    <option key={index} value={value.id}>{value.name}</option>
                )})}
            </Select>
            <Slider 
                value={props.morphSliders[props.morphType]}
                onChange={(e,newValue) => props.handleChange(e,newValue,props.morphType,selectValue)}
                aria-labelledby="continuous-slider"
                step={0.001}
                min={0}
                max={1}
            />
        </FormControl>
    );
}

function FaceControl(props:any){
    const [morphs, setMorphs] = useState([[],[],[],[]]);
    const [morphSliders, setMorphSliders] = useState([0, 0, 0, 0]);

    useEffect(() => {
        if(props.activeModelId === -1)return;
        const mesh:SkinnedMesh = props.models[props.activeModelId].mesh;
        const morphs = mesh.geometry.userData.MMD.morphs;
        let morphs_array:any = [[],[],[],[]];
        var i=0;
        for (const m of morphs) {
            const morph = {
                id:i,
                name:m.name
            }
            morphs_array[m.panel - 1].push(morph);
            i++;
        }
        setMorphs(morphs_array)
    },[props.models,props.activeModelId])

    const handleChange = (event: any, newValue: number | number[],morphs_array_num: number,selectValue: number ) => {
        const mesh: SkinnedMesh = props.models[props.activeModelId].mesh;
        if(!mesh.morphTargetInfluences){
            return;
        }
        mesh.morphTargetInfluences[selectValue] = newValue as number;
        const newMprphSliders = morphSliders.slice();
        newMprphSliders[morphs_array_num] = newValue as number;
        setMorphSliders(newMprphSliders);
    };
    return (
        <div style={{textAlign: "center"}}>
            <p style={{fontSize:20,margin:"5px 0px 0px 0px"}}>表情操作</p>
            <div style={{padding:"0px 10px 10px 10px"}}>
                <MorphControl label="目" morphs={morphs[0]} morphType={0} handleChange={handleChange} morphSliders={morphSliders} />
                <MorphControl label="リップ" morphs={morphs[1]} morphType={1} handleChange={handleChange} morphSliders={morphSliders} />
            </div>
            <div style={{padding:"0px 10px 10px 10px"}}>
                <MorphControl label="まゆ" morphs={morphs[2]} morphType={2} handleChange={handleChange} morphSliders={morphSliders} />
                <MorphControl label="その他" morphs={morphs[3]} morphType={3} handleChange={handleChange} morphSliders={morphSliders} />
            </div>
        </div>
      );
}
export default FaceControl;
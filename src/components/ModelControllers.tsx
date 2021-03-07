import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import BoneControl from './BoneControl';
import FaceControl from './FaceControl';
import ModelControl from './ModelControl';

type Props = {
    controlMode: string,
    setControlMode: React.Dispatch<React.SetStateAction<string>>,
    isShowBoneSelect: boolean,
    setIsShowBoneSelect: React.Dispatch<React.SetStateAction<boolean>>,
}
const ModelControllers:React.VFC<Props> = props => {
    return (
        <>
            <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                <ModelControl key="modelcontrol"  />
            </Grid>
            <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                <BoneControl 
                    key="bonecontrol"
                    controlMode={props.controlMode}
                    setControlMode={props.setControlMode} 
                    isShowBoneSelect={props.isShowBoneSelect}
                    setIsShowBoneSelect={props.setIsShowBoneSelect}
                />
            </Grid>
            <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                <FaceControl key="faceControl" />
            </Grid>
        </>
    )
}
export default ModelControllers;
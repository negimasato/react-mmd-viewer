import { Button, ButtonGroup } from '@material-ui/core';
import React, { useEffect, useState, useRef, CSSProperties } from 'react';

type Props = {
    controlMode: string,
    setControlMode: React.Dispatch<React.SetStateAction<string>>,
    isShowBoneSelect: boolean,
    setIsShowBoneSelect: React.Dispatch<React.SetStateAction<boolean>>,
}

const BoneControl:React.VFC<Props> = props => {
    const setControl = (mode:string) => {
        props.setControlMode(mode);
    }
    const toggleBoneSelect = () => {
        if ( props.isShowBoneSelect ){
            props.setIsShowBoneSelect(false);
        } else {
            props.setIsShowBoneSelect(true);
        }
    }
    const toggleRotate = () => {
        if (props.controlMode === 'rotate') {
            props.setControlMode("");
        } else {
            props.setControlMode("rotate");
        }
    }
    const toggleTransfer = () => {
        if (props.controlMode === 'translate') {
            props.setControlMode("");
        } else {
            props.setControlMode("translate");
        }
    }
    return (
        <div style={{textAlign: "center", padding:"5px"}}>
            <p style={{fontSize:20,margin:"0px 0px 10px 0px"}}>ボーン操作</p>
            <ButtonGroup fullWidth aria-label="button group">
                <Button　onClick={toggleBoneSelect}>選択</Button>
                <Button　onClick={toggleRotate}>回転</Button>
                <Button　onClick={toggleTransfer}>移動</Button>
            </ButtonGroup>
        </div>
      );
}
export default BoneControl;
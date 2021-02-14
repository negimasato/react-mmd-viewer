import React, { useEffect, useState, useRef, CSSProperties } from 'react';
function BoneControl(props:any){
    function setControl(mode:string) {
        props.setControlMode(mode);
    }
    function toggleBoneSelect() {
        if ( props.isShowBoneSelect ){
            props.setIsShowBoneSelect(false);
        } else {
            props.setIsShowBoneSelect(true);
        }
    }
    return (
        <div style={{textAlign: "center"}}>
            <p style={{fontSize:20,margin:"5px 0px 0px 0px"}}>ボーン操作</p>
            <div style={{padding:"5px 10px 10px 10px"}}>
                <input style={{width:"30%"}} type="button" value="選択" onClick={toggleBoneSelect}/>
                <input style={{width:"30%"}} type="button" value="回転" onClick={() => setControl('rotate')}/>
                <input style={{width:"30%"}} type="button" value="移動" onClick={() => setControl('translate')}/>
            </div>
        </div>
      );
}
export default BoneControl;
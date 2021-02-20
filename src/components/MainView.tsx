import { OrbitControls, OrthographicCamera, PerspectiveCamera, Stats, useCamera } from "@react-three/drei";
import { AnyMxRecord } from "dns";
import React, { createRef, Suspense, useRef, useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { Camera, Canvas, createPortal, SceneProps, useFrame, useThree } from "react-three-fiber";
import { Matrix4,  Mesh,  Raycaster,  Scene, Sprite, SpriteMaterial, Texture, Vector2, Vector3 } from "three";
import { ModelClass } from "../classes/ModelClass";
import Label from "./Label";
import ModelView from "./ModelView";
import Status from "./Status";
import '../App.css'
import { useCallback } from "react";

function MainView(props:any){
    const [ labelP, setLabelP ] = useState<[number,number]>([0,0]);
    const [ labelText, setLabelText ] = useState("")
    const [ isShowLabel, setIsShowLabel] = useState(false);
    const orbit = useRef<OrbitControls>();
    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        setLabelP([e.clientY,e.clientX]);
    },[]);

    return (
        <div>
            {
                isShowLabel 
                ? <Status top={labelP[0]} left={labelP[1]} text={labelText}/>
                : null 
            }
            <Canvas
            className="mainView"
            onMouseMove={onMouseMove}
            style={{backgroundColor:"black",height:"500px"}}
            colorManagement={false}
            camera={{fov:50,position:[0,10,30]}}>
                <Stats
                    showPanel={0} // Start-up panel (default=0)
                    className={"stats"}
                />
                <ambientLight />
                <Suspense fallback={null}>
                {props.models.map((model:ModelClass,index: any) => {
                    return(
                    <ModelView 
                        {...props}
                        key={model.id} 
                        modelClass={model} 
                        position={[0,0,0]}
                        setLabelText={setLabelText}
                        setIsShowLabel={setIsShowLabel}
                        orbit={orbit}
                    />
                )})}
                </Suspense>
                <OrbitControls ref={orbit} />
                <gridHelper />
            </Canvas>
        </div>
    );
}

export default MainView;
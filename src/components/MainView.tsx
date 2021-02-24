import { OrbitControls, OrthographicCamera, PerspectiveCamera, Stats, useCamera } from "@react-three/drei";
import { AnyMxRecord } from "dns";
import React, { createRef, Suspense, useContext, useRef, useState } from "react";
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
import ProjectContext from "../contexts/ProjectContext";

function MainView(props:any){
    const [ labelP, setLabelP ] = useState<[number,number]>([0,0]);
    const [ labelText, setLabelText ] = useState("")
    const [ isShowLabel, setIsShowLabel] = useState(true);
    const orbit = useRef<OrbitControls>();
    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        // console.log("clientX=" + e.clientX);
        setLabelP([e.clientY,e.clientX]);
    },[]);
    const projectContext = useContext(ProjectContext);

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
            style={{backgroundColor:"white",height:"500px"}}
            colorManagement={false}
            camera={{fov:30,position:[0,10,30]}}>
                <Stats
                    showPanel={0} // Start-up panel (default=0)
                    className={"stats"}
                />
                <directionalLight 
                      intensity={0.9}
                      position={[-0.5, -1, 0.5]}
                      castShadow={true}
                />
                <Suspense fallback={null}>
                {projectContext.models.map((model:ModelClass,index: any) => {
                    // Canvas内のコンポーネントへはContextは渡せない？
                    // https://spectrum.chat/react-three-fiber/general/using-usecontext-hook-within-canvas~41e3bc4a-28c2-4318-930c-df8be8d3a014
                    return(
                    <ModelView 
                        {...props}
                        key={index}
                        index={index}
                        modelClass={model} 
                        position={[0,0,0]}
                        activeModelIndex={projectContext.activeModelIndex}
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

import React, { useRef, useEffect, useState, useCallback }  from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { TransformControls, OrbitControls } from '@react-three/drei';
import { CCDIKHelper, CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver';
import { Camera, Intersection, Mesh, SkeletonHelper, Vector2 } from 'three';
import { SkinnedMesh } from 'three';
import BoneHelper from '../libs/BoneHelper';

function ModelView(props: any) {
    const mesh = useRef<SkinnedMesh>()
    const orbit = useRef<OrbitControls>()
    const transform = useRef<TransformControls>()
    const { scene } = useThree()
    const [ helper, setHelper ] = useState<BoneHelper|null>(null);
    const [ skHelper, setSkHelper ] = useState<SkeletonHelper>();
    const [ selectObject, setSelectObject ] = useState(0);
    
    const handleModelClick = useCallback((e:any)=>{
        if(e.object.type === 'Mesh') {
            setSelectObject( (oldObject: any) => {
                const mesh: Mesh = e.object;
                const bone_id = mesh.userData.bone_id;
                console.log('setSelectObject:' + bone_id);
                return bone_id;
            });
        }
    },[]);
    useFrame(() => {
        if(props.isShowBoneSelect) {
            const m:SkinnedMesh = mesh.current?.children[0] as SkinnedMesh;
            // console.log("m=")
            // console.log(m.skeleton.bones[selectObject].position);
            if(helper) {
                // console.log("helper=");
                // console.log(helper.mesh.skeleton.bones[selectObject].position);
            }
        }
    })
    useEffect(() => {
        if (typeof transform.current !== 'undefined') {
            const controls: any = transform.current
            const callback = (event: any) => {
                if(orbit.current){
                    orbit.current.enabled = !event.value
                }
            }
            if(controls) {
                if(props.activeModelId === props.modelClass.id) {
                    const m:SkinnedMesh = mesh.current?.children[0] as SkinnedMesh;
                    // console.log(m);
                    controls.attach(m.skeleton.bones[selectObject]);
                    if (props.isShowBoneSelect ) {
                        if(m) {
                            if(helper == null) {
                                const helper = new BoneHelper(m);
                                setHelper(helper);
                                scene.add(helper);
                            } else {
                                helper.visible = true;
                            }
                        }
                    } else {
                        if(helper){
                            helper.visible = false;
                        }
                    }

                    controls.setMode(props.controlMode);
                    controls.addEventListener("dragging-changed", callback)
                    return () => {
                        controls.removeEventListener("dragging-changed", callback)
                    }
                }
            }
        }
    }, [props.activeModelId, props.modelClass.id, selectObject, props.isShowBoneSelect, props.controlMode, helper, scene])

    return (
        <>
            <TransformControls ref={transform}>
                <mesh ref={mesh}
                onClick={handleModelClick}>
                    <primitive 
                        object={props.modelClass.mesh} 
                        dispose={null} 
                        scale={[0.5 ,0.5, 0.5]} 
                        position={props.position}/>
                </mesh>
            </TransformControls>
            <OrbitControls ref={orbit}/>
        </>
    );
}

export default ModelView;

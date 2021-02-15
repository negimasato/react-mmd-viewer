
import React, { useRef, useEffect, useState, useCallback }  from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { TransformControls, OrbitControls } from '@react-three/drei';
import { SkinnedMesh, Mesh } from 'three';
import BoneHelper from '../libs/BoneHelper';

function ModelView(props: any) {
    const mesh = useRef<SkinnedMesh>()
    const transform = useRef<TransformControls>()
    const { scene } = useThree()
    const [ helper, setHelper ] = useState<BoneHelper|null>(null);
    const [ selectObject, setSelectObject ] = useState(0);
    
    const handleModelClick = useCallback((e:any)=>{
        if(e.object.type === 'Mesh') {
            setSelectObject( (oldObject: any) => {
                const mesh: Mesh = e.object;
                const bone_id = mesh.userData.bone_id;
                return bone_id;
            });
        }
    },[]);
    useEffect(() => {
        if (typeof transform.current !== 'undefined') {
            const controls: any = transform.current
            const callback = (event: any) => {
                if(props.orbit.current){
                    props.orbit.current.enabled = !event.value
                }
            }
            if(controls) {
                if(props.activeModelId == props.modelClass.id) {
                    const m:SkinnedMesh | undefined = mesh.current?.children[0] as SkinnedMesh;
                    if(!m)return;
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

                } else {
                    controls.detach();
                    if(helper != null) {
                        helper.visible = false;
                    }
                }
                controls.addEventListener("dragging-changed", callback);
                return () => {
                    controls.removeEventListener("dragging-changed", callback);
                }
            }
        }
    }, [props.activeModelId, props.modelClass.id, selectObject, props.isShowBoneSelect, props.controlMode, helper, scene])

    return (
        <>
            <TransformControls ref={transform} enabled={props.activeModelId == props.modelClass.id ? true : false}>
                <mesh ref={mesh}
                onClick={handleModelClick}>
                    <primitive 
                        object={props.modelClass.mesh} 
                        dispose={null} 
                        scale={[0.5 ,0.5, 0.5]} 
                        position={props.position}/>
                </mesh>
            </TransformControls>
        </>
    );
}

export default ModelView;


import React, { useRef, useState, useCallback }  from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { TransformControls } from '@react-three/drei';
import { SkinnedMesh, Mesh, Raycaster } from 'three';
import BoneHelper from '../libs/BoneHelper';
import { useLayoutEffect } from 'react';

function ModelView(props: any) {
    const mesh = useRef<SkinnedMesh>()
    const transform = useRef<TransformControls>()
    const ray = new Raycaster();
    const { scene,mouse,camera } = useThree()
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
    useFrame(() => {
        if (mesh.current == null)return;
        if (props.activeModelIndex != props.index)return;
        ray.setFromCamera( mouse, camera );
        const intersects = ray.intersectObjects( mesh.current.children[0].children );
        if(intersects.length > 0) {
            for ( let i = 0; i < intersects.length; i ++ ) {
                const bone_id = intersects[i].object.userData.bone_id;
                const skinnedMesh:SkinnedMesh = mesh.current.children[0] as SkinnedMesh;
                const bone_name = skinnedMesh.geometry.userData.MMD.bones[bone_id].name;
                props.setLabelText(bone_name);
                props.setIsShowLabel(true);
            }
        } else {
            props.setIsShowLabel(false);
        }
    })
    useLayoutEffect(() => {
        if (typeof transform.current !== 'undefined') {
            const controls: any = transform.current
            const callback = (event: any) => {
                if(props.orbit.current){
                    props.orbit.current.enabled = !event.value
                }
            }
            if(controls) {
                if(props.activeModelIndex == props.index) {
                    if(!mesh.current || !mesh.current.children)return;
                    const m:SkinnedMesh | undefined = mesh.current?.children[0] as SkinnedMesh;
                    if(!m)return;
                    controls.attach(m.skeleton.bones[selectObject]);
                    if (props.isShowBoneSelect ) {
                        if(m) {
                            if(helper == null) {
                                const helper = new BoneHelper(m);
                                scene.add(helper);
                                setHelper(helper);
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
    })

    return (
        <>
            {props.activeModelIndex == props.index 
            ?   <TransformControls 
                    ref={transform} 
                    enabled={true}
                    >
                    <mesh ref={mesh}
                    
                    onClick={handleModelClick}>
                        <primitive 
                            object={props.modelClass.mesh} 
                            dispose={null} 
                            scale={[0.5 ,0.5, 0.5]} 
                            position={props.position}/>
                    </mesh>
                </TransformControls> 
            :   <mesh ref={mesh}
                    onClick={handleModelClick}>
                        <primitive 
                            object={props.modelClass.mesh} 
                            dispose={null} 
                            scale={[0.5 ,0.5, 0.5]} 
                            position={props.position}/>
                </mesh>}
        </>
    );
}

export default ModelView;

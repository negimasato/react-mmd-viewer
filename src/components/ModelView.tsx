
import React, { useRef, useEffect, useState }  from 'react';
import { useThree } from 'react-three-fiber';
import { TransformControls, OrbitControls } from '@react-three/drei';
import { CCDIKHelper, CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver';

function ModelView(props: any) {
    const mesh = useRef<THREE.Mesh>()
    const orbit = useRef<OrbitControls>()
    const transform = useRef<TransformControls>()
    const { scene } = useThree()
    const [ ikHepler, setIkHelper ] = useState<CCDIKHelper|null>(null);
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
                    controls.attach(props.modelClass.mesh.skeleton.bones[props.selectObject]);
                    if(props.controlMode === 'select'){
                        if(props.modelClass.mesh) {
                            if(ikHepler == null) {
                                var solver = new CCDIKSolver(props.modelClass.mesh,props.modelClass.mesh.geometry.userData.MMD.iks);
                                const helper = solver.createHelper();
                                setIkHelper(helper);
                                // @ts-ignore
                                scene.add(helper);
                            } else {
                                // @ts-ignore
                                ikHepler.visible = true;
                                controls.detach();
                            }
                        }
                    }else{
                        controls.setMode(props.controlMode);
                        if(ikHepler !== null) {
                            // @ts-ignore
                            ikHepler.visible = false;
                        }
                    }
                    controls.addEventListener("dragging-changed", callback)
                    return () => controls.removeEventListener("dragging-changed", callback)
                }
            }
        }
    }, [props.activeModelId, props.modelClass.id, props.modelClass.mesh, props.selectObject, props.controlMode, ikHepler, scene])

    return (
        <>
            <TransformControls ref={transform}>
                <mesh ref={mesh}>
                    <primitive 
                        object={props.modelClass.mesh} dispose={null} scale={[0.25 ,0.25, 0.25]} position={props.position} />
                </mesh>
            </TransformControls>
            <OrbitControls ref={orbit}/>
        </>
    );
}

export default ModelView;

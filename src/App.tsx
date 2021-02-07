import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Canvas } from 'react-three-fiber';
import ModelControl from './components/ModelControl';
import Model from './components/Model';
import { ModelClass } from './classes/ModelClass';
import BoneControl from './components/BoneControl';

function App() {
    const [models, setModels] = useState<ModelClass[]>([]);
    const [selectObject, setSelectObject] = useState(0);
    const [activeModelId, setActiveModelId] = useState(-1);
    const [controlMode, setControlMode] = useState('rotate');
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        React MMD Viewer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={8}>
                    <Canvas 
                    style={{backgroundColor:"black",height:"600px"}}
                    colorManagement={false} 
                    camera={{ fov: 50, position: [0, 0, 30] }} >
                        <ambientLight />
                        <Suspense fallback={null}>
                        {models.map((model,index) => {
                            return(
                            <Model key={model.id} modelClass={model} position={[0,0,0]}　selectObject={selectObject} activeModelId={activeModelId} controlMode={controlMode}/>
                        )})}
                        </Suspense>
                        <gridHelper />
                    </Canvas>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12} style={{border: "1px solid #ffffff"}}>
                        <ModelControl key="modelcontrol" models={models} setModels={setModels} activeModelId={activeModelId} setActiveModelId={setActiveModelId} />
                    </Grid>
                    <Grid item xs={12} style={{border: "1px solid #ffffff"}}>
                        <BoneControl key="bonecontrol" models={models} setActiveModelId={setActiveModelId} controlMode={controlMode} setControlMode={setControlMode} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default App;

import React, { Suspense, useState } from 'react';
import * as p from '../package.json';
import './App.css';
import { AppBar, createStyles, Grid, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Canvas } from 'react-three-fiber';
import ModelControl from './components/ModelControl';
import ModelView from './components/ModelView';
import BoneControl from './components/BoneControl';
import { ModelClass } from './classes/ModelClass';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function App() {
    const [models, setModels] = useState<ModelClass[]>([]);
    const [selectObject, setSelectObject] = useState(0);
    const [activeModelId, setActiveModelId] = useState(-1);
    const [controlMode, setControlMode] = useState('rotate');

    const classes = useStyles();
    const [openLicense, setOpenLicense] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        React MMD Viewer ver.{p.version}
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <InfoIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => window.open("https://github.com/" + p.author.name + "/" + p.name)}>Github</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={12}>
                    <Canvas 
                    style={{backgroundColor:"black",height:"500px"}}
                    colorManagement={false} 
                    camera={{ fov: 50, position: [0, 0, 30] }} >
                        <ambientLight />
                        <Suspense fallback={null}>
                        {models.map((model,index) => {
                            return(
                            <ModelView key={model.id} modelClass={model} position={[0,0,0]}　selectObject={selectObject} activeModelId={activeModelId} controlMode={controlMode}/>
                        )})}
                        </Suspense>
                        <gridHelper />
                    </Canvas>
                </Grid>
                <Grid item xs={6} style={{border: "1px solid #ffffff"}}>
                    <ModelControl key="modelcontrol" models={models} setModels={setModels} activeModelId={activeModelId} setActiveModelId={setActiveModelId} />
                </Grid>
                <Grid item xs={6} style={{border: "1px solid #ffffff"}}>
                    <BoneControl key="bonecontrol" models={models} setActiveModelId={setActiveModelId} controlMode={controlMode} setControlMode={setControlMode} />
                </Grid>
            </Grid>
        </>
    );
}

export default App;

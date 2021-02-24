import React, { Suspense, useContext, useRef, useState } from 'react';
import * as p from '../package.json';
import './App.css';
import { AppBar, Button, createMuiTheme, createStyles, CssBaseline, Grid, IconButton, makeStyles, Menu, MenuItem, Theme, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Box from '@material-ui/core/Box';
import ModelControl from './components/ModelControl';
import BoneControl from './components/BoneControl';
import FaceControl from './components/FaceControl';
import { ModelClass } from './classes/ModelClass';
import { MMDLoader } from './libs/MMDLoader';
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper';
import MainView from './components/MainView';
import StartDialog from './components/StartDialog';
import ProjectContext from './contexts/ProjectContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      width: '80%',
      maxHeight: 435,
    },
  }),
);

function App() {
    const [models, setModels] = useState<ModelClass[]>([]);
    const [selectObject, setSelectObject] = useState(0);
    const [activeModelIndex, setactiveModelIndex] = useState(-1);
    const [controlMode, setControlMode] = useState('rotate');
    const [ isShowBoneSelect, setIsShowBoneSelect ] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuName, setMenuName] = React.useState("");
    const [darkMode, setDarkMode] = React.useState(
        localStorage.getItem("darkMode") === "on" ? true : false
    );
    const [dirHandle, setDirHandle] = useState();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState('Dione');

    const handleStartDialogClose = (newValue?: string) => {
        setOpen(false);
    
        if (newValue) {
          setValue(newValue);
        }
      };
    
    const handleMenu = (event: React.MouseEvent<HTMLElement>, menuName:string) => {
        setAnchorEl(event.currentTarget);
        setMenuName(menuName);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        setMenuName("");
    };

    const handleDarkModeOn = () => {
        localStorage.setItem("darkMode", "on");
        setDarkMode(true);
    };
    const handleDarkModeOff = () => {
        localStorage.setItem("darkMode", "off");
        setDarkMode(false);
    };
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });

    const openPoseFile = async (e: any) => {
        setAnchorEl(null);
        setMenuName("");
        if(models.length === 0){
            alert("モデルデータがありません。");
            return;
        }
        let fileHandle;
        const pickerOpts = {
            types: [
              {
                description: 'MMD Pose Data',
                accept: {
                  '*/*': ['.vpd']
                }
              },
            ],
            excludeAcceptAllOption: true,
            multiple: false
        };
        // @ts-ignore
        [fileHandle] = await window.showOpenFilePicker(pickerOpts);
        if(!fileHandle)return;
        // @ts-ignore
        var file = await fileHandle.getFile();
        const loader = new MMDLoader();
        const helper = new MMDAnimationHelper();
        loader.loadVPDFromFile(file,(vpd) => {
            const mesh = models[selectObject].mesh;
            if(!mesh){
                alert("モデルデータを取得できませんでした。");
                return;
            }
            helper.pose(mesh,vpd);
        }, (progress) => {
            console.log(progress);
        }, (error) => {
            console.log(error);
        })
    }


    return (
        <ThemeProvider theme={theme}>
            <ProjectContext.Provider value={{dirHandle,setDirHandle,models,setModels,activeModelIndex,setactiveModelIndex}}>
            <CssBaseline/>
            <AppBar color="default" position="static">
                <Toolbar variant="dense">
                    <Box display='flex' flexGrow={1}>
                        <Typography variant="h6">
                            React MMD Viewer ver.{p.version}
                        </Typography>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={e => handleMenu(e,"file")}>
                            File
                        </Button>
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
                            open={menuName === 'file' ? true : false}
                            onClose={handleClose}
                        >
                            {/* <MenuItem onClick={saveProject}>プロジェクトを保存する</MenuItem> */}
                            <MenuItem onClick={openPoseFile}>ポーズ読み込み</MenuItem>
                        </Menu>
                    </Box>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={e => handleMenu(e,"info")}
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
                        open={menuName === 'info' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => window.open("https://github.com/" + p.author.name + "/" + p.name)}>Github</MenuItem>
                    </Menu>
                    {darkMode ? (
                        <IconButton color="inherit" onClick={handleDarkModeOff}>
                        <Brightness7Icon />
                        </IconButton>
                    ) : (
                        <IconButton color="inherit" onClick={handleDarkModeOn}>
                        <Brightness4Icon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            {/* <StartDialog
                classes={{
                    paper: classes.paper,
                }}
                id="ringtone-menu"
                keepMounted
                open={open}
                onClose={handleStartDialogClose}
                value={value}
            /> */}
            <Grid container >
                <Grid item xs={12} >
                    <MainView 
                        selectObject={selectObject}
                        controlMode={controlMode}
                        isShowBoneSelect={isShowBoneSelect}
                    />
                </Grid>
                <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                    <ModelControl key="modelcontrol"  />
                </Grid>
                <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                    <BoneControl 
                        key="bonecontrol"
                        controlMode={controlMode} 
                        setControlMode={setControlMode} 
                        isShowBoneSelect={isShowBoneSelect}
                        setIsShowBoneSelect={setIsShowBoneSelect}
                    />
                </Grid>
                <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                    <FaceControl key="faceControl" />
                </Grid>
            </Grid>
            </ProjectContext.Provider>
        </ThemeProvider>
    );
}

export default App;

import React, { useContext, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { Backdrop, Button, CircularProgress, DialogActions, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import ProjectContext from '../contexts/ProjectContext';
import { SettingsPowerRounded } from '@material-ui/icons';
import { ModelClass } from '../classes/ModelClass';
import { MMDLoader } from '../libs/MMDLoader';
import { models } from '@tensorflow/tfjs';

export interface SelectLoadModelDialogProps {
    values: {
        file: File;
        path: string;
        rootDirHandle: any;
    }[];
    open: boolean;
    setOpen: (value?: any) => void;
}

function SelectLoadModelDialog(props: SelectLoadModelDialogProps) {
    const [progressOpen,setProgressOpen] = useState(false);
    const projectContext = useContext(ProjectContext);

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        handleClose();
        setProgressOpen(true);
        const loader = new MMDLoader();
        const m:ModelClass = new ModelClass(projectContext.models.length);
        // @ts-ignore
        loader.loadFile(props.values[index].file, props.values[index].rootDirHandle, (mesh: SkinnedMesh) => {
            m.mesh = mesh;
            const comment = "モデル情報:\n\n" + mesh.geometry.userData.MMD.comment;
            m.comment = comment;
            m.modelName = projectContext.models.length + ':' + mesh.geometry.userData.MMD.modelName;
            const newModels = [...projectContext.models,m];
            const newActiveId = projectContext.activeModelIndex + 1;
            alert(m.comment);
            projectContext.setModels(newModels);
            projectContext.setactiveModelIndex(newActiveId);
            setProgressOpen(false);
        });
    }

    return (
        <>
            <Backdrop open={progressOpen} style={{zIndex: 10000 ,color: '#fff',}}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                keepMounted
                maxWidth="lg"
                aria-labelledby="confirmation-dialog-title"
                open={props.open}
            >
                <DialogTitle id="confirmation-dialog-title">モデル選択</DialogTitle>
                <DialogContent dividers>
                    <List component="div" role="list">
                        {
                            props.values.map((value,index) => {
                                return(
                                    <ListItem key={index} button divider role="listitem" onClick={(event) => handleListItemClick(event, index)}>
                                        <ListItemText primary={value.path} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default SelectLoadModelDialog;
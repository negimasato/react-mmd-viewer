import React, { useContext } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { Link, Typography } from '@material-ui/core';
import ProjectContext from '../contexts/ProjectContext';

export interface ConfirmationDialogRawProps {
  classes: Record<'paper', string>;
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}

function StartDialog(props: ConfirmationDialogRawProps) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const projectContext = useContext(ProjectContext);

    React.useEffect(() => {
        if (!open) {
        setValue(valueProp);
        }
    }, [valueProp, open]);

    const createNewProject = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // @ts-ignore
        // @ts-ignore
        const dirHandle = await window.showDirectoryPicker();
        for await (const entry of dirHandle.values()) {
            console.log(entry.kind, entry.name);
        }
        const dirName = 'Models';
        const subDir = dirHandle.getDirectoryHandle(dirName, {create: true});
        console.log(subDir);
        onClose('close');
    }

    const openProject = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // @ts-ignore
        // @ts-ignore
        const dirHandle = await window.showDirectoryPicker();
        projectContext.setDirHandle(dirHandle);
        onClose('close');
    }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
        <DialogTitle id="confirmation-dialog-title">ようこそ</DialogTitle>
        <DialogContent dividers>
            <Typography >
                <Link href="#" onClick={createNewProject} color="textPrimary">
                    新規プロジェクト作成
                </Link>
                <br/>
                <Link href="#" onClick={openProject} color="textPrimary">
                    プロジェクトを開く
                </Link>
            </Typography>
        </DialogContent>
    </Dialog>
  );
}
export default StartDialog;
import React, { RefObject, useRef } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Canvas, Image, loadImage } from 'canvas';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
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
export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: Image | undefined;
  open: boolean;
  onClose: (value?: string) => void;
}

function PoseNetPreview(props: ConfirmationDialogRawProps) {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const content = useRef();
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef<HTMLElement>(null);

    const getContext = (): CanvasRenderingContext2D | null => {
        const canvas: any = canvasRef.current;
        if(canvas) {
            return canvas.getContext('2d');
        }
        return null;
        
    };
    React.useEffect(() => {
        const ctx = getContext();
        if(ctx && props.value) {
            const d = content.current as unknown as HTMLDivElement;
            const canvas = canvasRef.current as unknown as HTMLCanvasElement;
            const image = props.value as unknown as CanvasImageSource;
            const imageWidth = image.width as number;
            const imageHeight = image.height as number;
            canvas.width = d.clientWidth;
            var scale = canvas.width / imageWidth;
            canvas.height = imageHeight * scale;
            // const scale = canvas.height / imageHeight;
            ctx.setTransform(scale, 0, 0, scale, 0, 0);
            // @ts-ignore
            ctx.drawImage(image,0,0);
        }
        
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    // onClose(value);
  };


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="lg"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">PoseNetプレビュー</DialogTitle>
      <DialogContent dividers={true} ref={content}>
         <canvas ref={canvasRef}>

         </canvas>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default PoseNetPreview;
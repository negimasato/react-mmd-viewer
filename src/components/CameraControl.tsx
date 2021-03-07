import { Button, ButtonGroup, Grid, Input, makeStyles, Slider, Typography } from '@material-ui/core';
import React, { useEffect, useState, useRef, CSSProperties, useContext } from 'react';
import ProjectContext from '../contexts/ProjectContext';

type Props = {
}
const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });
  
const CameraControl:React.VFC<Props> = props => {
    const classes = useStyles();
    const projectContext = useContext(ProjectContext);
    const handleChange = (e:React.ChangeEvent<{}>,newValue:number | number[] ) => {
        if (typeof newValue === 'number') {
            console.log('newValue:' + newValue);
            projectContext.setFov(newValue);
        }
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        projectContext.setFov(Number(event.target.value));
    };
    const handleBlur = () => {
        if (projectContext.fov < 0) {
            projectContext.setFov(0);
        } else if (projectContext.fov > 100) {
            projectContext.setFov(100);
        }
      };
    return (
        <div style={{textAlign: "center", padding:"5px"}}>
            <p style={{fontSize:20,margin:"0px 0px 10px 0px"}}>カメラ操作</p>
            <Typography id="input-slider" gutterBottom>
                視野角
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider 
                        value={typeof projectContext.fov === 'number' ? projectContext.fov : 0}
                        onChange={(e,newValue) => handleChange(e,newValue)}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={0}
                        max={100}
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={projectContext.fov}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>

        </div>
    )
}
export default CameraControl;
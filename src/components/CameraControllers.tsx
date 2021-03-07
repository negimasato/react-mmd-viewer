import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import CameraControl from './CameraControl';
import LightControl from './LightControl';

type Props = {
}
const CameraControllers:React.VFC<Props> = props => {
    return (
        <>
            <Grid item xs={4} style={{border: "1px solid #ffffff"}}>
                <CameraControl />
            </Grid>
        </>
    )
}
export default CameraControllers;
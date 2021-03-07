import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import React, { useMemo, useRef, useEffect, createRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PanToolIcon from '@material-ui/icons/PanTool';
import { Object3DNode, Overwrite, useThree, } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Matrix4, PerspectiveCamera, Vector2, Vector3 } from 'three';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    position: {
      position: 'absolute',
      zIndex: 1,
      right: 10
    },
  }),
);

export default function ActionBUttons(props: any) {
  var panStart = new Vector2();
  var panEnd = new Vector2();
  var panDelta = new Vector2();
  const classes = useStyles();
  const refZoom = useRef() as React.RefObject<HTMLButtonElement>;
  const refTransform = useRef() as React.RefObject<HTMLButtonElement>;
  const onMouseDownZoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    refZoom.current?.requestPointerLock();
  }
  const onMouseUpZoom = (event: any) => {
    window.document.exitPointerLock();
  }

  const onMouseMoveZoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(!window.document.pointerLockElement)return;
    const orbit = props.orbit as React.MutableRefObject<Overwrite<Object3DNode<OrbitControls, typeof OrbitControls>, {
      target?: Vector3 | [x: number, y: number, z: number] | undefined;
  }> | undefined>;
    if(orbit) {
      const camera = orbit.current?.object;
      if (camera) {
        camera.translateZ(event.movementY);
      }
    }
  }
  const onMouseDownTransform = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    refTransform.current?.requestPointerLock();
    panStart.set( event.clientX, event.clientY );
  }
  const onMouseUpTransform = (event: any) => {
    window.document.exitPointerLock();
  }
  const onMouseMoveTransform = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(!window.document.pointerLockElement)return;
    const orbit = props.orbit as React.MutableRefObject<Overwrite<Object3DNode<OrbitControls, typeof OrbitControls>, {
      target?: Vector3 | [x: number, y: number, z: number] | undefined;
  }> | undefined>;
    if(orbit) {
      const orbitControl = orbit.current as OrbitControls;
      const camera = orbitControl.object as PerspectiveCamera;
      const element = orbitControl.domElement as HTMLElement;
      const panSpeed = orbitControl.panSpeed as number;
      
      if (orbitControl && orbitControl.object) {
        panEnd.set( panStart.x + event.movementX, panStart.y + event.movementY );
        panDelta.subVectors( panEnd, panStart ).multiplyScalar( panSpeed );
        const target = orbitControl.target as Vector3;
        var offset = new Vector3();
        if ( target ) {
          var position = camera.position;
          offset.copy( position ).sub( target );
          var targetDistance = offset.length();
          targetDistance *= Math.tan( ( camera.fov / 2 ) * Math.PI / 180.0 );
          var panOffset = new Vector3();
          panOffset.add(panLeft( 2 * panDelta.x * targetDistance / element.clientWidth, camera.matrix ));
          panOffset.add(panUp( 2 * panDelta.y * targetDistance / element.clientHeight, camera.matrix));
          panStart.copy( panEnd );
          target.add( panOffset );
          var position = orbitControl.object.position;
          position.copy( target ).add( offset );
        }
      }
    }
  }

  const panLeft = ( distance: number, objectMatrix: Matrix4 ):Vector3 => {
      var v = new Vector3();
			v.setFromMatrixColumn( objectMatrix, 0 );
			v.multiplyScalar( - distance );
      return v;
	};

	const panUp = ( distance: number, objectMatrix: Matrix4):Vector3 => {
		var v = new Vector3();
    v.setFromMatrixColumn( objectMatrix, 1 );
		v.multiplyScalar( distance );
    return v;
	}

  return (
    <>
      <Fab
        ref={refZoom}
        size="small" 
        color="primary"
        className={classes.position}
        style={{top:50}}
        onMouseDown={onMouseDownZoom}
        onMouseUp={onMouseUpZoom}
        onMouseMove={onMouseMoveZoom}
        >
        <SearchIcon />
      </Fab>
      <Fab
        ref={refTransform}
        size="small" 
        color="primary"
        className={classes.position}
        style={{top:100}}
        onMouseDown={onMouseDownTransform}
        onMouseUp={onMouseUpTransform}
        onMouseMove={onMouseMoveTransform}
        >
        <PanToolIcon />
      </Fab>
    </>
  )
}
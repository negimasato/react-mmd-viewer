import React, { useMemo, useRef, useEffect } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components';
export default function Status(props: any) {
  return (
    <>
      <UpperLeft style={{top:(props.top + 5),left:(props.left + 5)}}>
        {props.text}
      </UpperLeft>
    </>
  )
}

const base = css`
  position: absolute;
  pointer-events: none;
  user-select: none;
  color: black;
  background-color: white;
  z-index:100000;
`

const UpperLeft = styled.div`
  ${base}
  top: 100px;
  left: 10px;
  font-size: 2em;
  pointer-events: all;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

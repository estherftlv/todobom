import React, {useCallback, useState, useRef} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import { Button } from 'react-bootstrap';
import Progress from './Progress';

const FileLoader = ({onDone}) => {

  const dispatch = useDispatch();

  const [file, setFile] = useState(undefined);
	const [progress, setProgress] = useState(0);
	const [label, setLabel] = useState("file_location");
	const [error, setError] = useState("status");
  const inputImg = useRef(null);


  const uploadFile = useCallback(() =>{
    const action = {
      type: "UPLOAD_FILE",
      payload: {file,setProgress,setLabel,onDone}
    }
    dispatch(action);
  },[file,dispatch,onDone]);

  const checkFile = useCallback(()=>{
    const action ={
      type: "CHECK_FILE",
      payload:{file,setLabel,setError,uploadFile,onDone}
    }
    dispatch(action);
  },[file,dispatch,uploadFile,onDone]);

  const clickFile = useCallback(e=>{
      inputImg.current.click();
    },[inputImg]);

  return(
    <Row>
      <Input type="file" onChange={event => {setFile(event.target.files[0])}} ref={inputImg} hidden/>
      <Button onClick={clickFile}><FaImage/>Add Image</Button>
      <Button disabled={file===undefined} onClick={checkFile}>UPLOAD_FILE</Button>
      <Progress disabled={file===undefined} percentage={progress}/>
      <Label>{error}</Label>
      <Label>{label}</Label>
    </Row>
  );

}

export default FileLoader;

const Row = styled.div`
	min-height: 100%;
  direction: ltr;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  background-color: ${({theme})=>theme.a100};

`;

const Label = styled.div`
  width: 400px;
  height: 70px;
	bottom: 2px;
	left: 2px;
  border: 1px solid black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 200;
 `;

 const Input =styled.input`

 `;

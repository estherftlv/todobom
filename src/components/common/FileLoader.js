import React, {useCallback, useState, useRef} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import plus from '../../assets/plus.svg';

import { Button } from 'react-bootstrap';
//import Progress from './Progress';

const FileLoader = ({onDone}) => {

  const dispatch = useDispatch();

  const [file, setFile] = useState(undefined);
	const [progress, setProgress] = useState(0);
	const [label, setLabel] = useState("file_location");
	const [error, setError] = useState("status");
  const inputImg = useRef(null);


  const setFileAndUpload = useCallback((e) =>{
    const myFile = e.target.files[0];
    setFile(myFile);
    const action = {
      type: "UPLOAD_FILE",
      payload: {myFile,setProgress,setLabel,onDone}
    }
    dispatch(action);
  },[setFile,dispatch,onDone]);


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
    <Container>
      <Col>
        <Title>Activity picture</Title>
        <Label>We’ll try to find a picture automatically from the activity link (if you enter one)</Label>
      </Col>
      <Input type="file" onChange={event => {setFile(event.target.files[0])}} ref={inputImg} hidden/>
      <AddImgButton onClick={clickFile}>
        <img src={plus}/>
      </AddImgButton>


      <Label>{error}</Label>
      <Label>{label}</Label>
    </Container>
  );

}
//<Progress disabled={file===undefined} percentage={progress}/>
// <Button disabled={file===undefined} onClick={checkFile}>UPLOAD_FILE</Button>
export default FileLoader;

const Col = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 10px 10px 10px;
`;
const Title = styled.div`
  font-size: 34px;
  min-height: 20px;
  color: ${({theme})=> theme.purple2};
`;

const Instructions = styled.div`
  color: red;
	display: flex;
	position: absolute;
  x: calc(50%)

`;
const AddImgButton = styled.div`
  color: red;
	display: flex;
	position: absolute;
  x: calc(50%)

`;
const Container = styled.div`
	min-height: 100%;
  height: 380px;
	display: flex;
	position: relative;
  border-color: ${({theme})=>theme.purple2};
  border-style: dotted;

`;

const Label = styled.div`
	font-size: 16px;
	min-height: 20px;
	color: ${({theme})=> theme.purple2};
	${({error, theme}) => error && `
		color: ${theme.r500};
	`};
`;

 const Input =styled.input`

 `;

import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, connect} from "react-redux";

import { FaImage } from 'react-icons/fa';

// components
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ClickOut from '../common/ClickOut';
import KeyVal from '../common/KeyVal';
import Spinner from '../common/Spinner';
import FileLoader from '../common/FileLoader';
//import FileLoader from '../common/FileLoader';

import {addActivity} from "../../redux/actions/activity.actions";


const AddActivityTmp4Esther = ({history, user}) => {
	const dispatch = useDispatch();

	//dropdown state:
	const [open, setOpen] = useState(null);//for dropdown menus
	const [newItem, setNewItem] = useState("");//for adding a topics

	//question state:
	const [ID, setID] = useState("");
	const [category, setCategory] = useState("none");//drop down list
	const [topic, setTopic] = useState("none");//drop down list
  const [title, setTitle] = useState("New activity");
	const [url, setUrl] = useState("none");//
	const [description, setDescription] = useState("none");
	const [time, setTime] = useState(0);//in minutes
	const [minAge, setMinAge] = useState(0);//optional
	const [maxAge, setMaxAge] = useState(0);//optional
	const [rating, setRating] = useState("none");//will be updated
//	const [active, setActive] = useState(true);//is obsolete?

	const [image, setImage] = useState("none");//TBD load file to storage and link to that URL

  const [showError, setShowError] = useState("");
	const [upload,setUpload] = useState(null);

	//technology: TBD?
  //isPDF
  //isAndroid
  //isiOS
  //isChrome
  //isFirefox
  //isIE



  const categorys = ["a","b","c","d"];
  const topics = ["topic1","topic2","topic3","topic4"];
  const active = "true";

  const toggle = useCallback((x)=>{
    if(open===null)
      setOpen(x);
    else {
      setOpen(null);
    }
  }, [open]);


  const handleClickOut = useCallback((x) => {
		if (open ===x) {
			setOpen(null);
		}

	}, [open]);

  const addToList = useCallback(type =>{
    if((type!==undefined)&&(newItem!=="")){
      const action = {
        type: `ADD_${type}`,
        payload: {newItem}
      }
      dispatch(action);
    }
  },[newItem,dispatch]);

  const onChangeProp = useCallback((x,type,propSetter) => {
    propSetter(x);
    handleClickOut(type);

  }, [handleClickOut]);

  const onAddtoFirebase = useCallback(action=>{
    setShowError("");
    setID(action.id);
  },[setID]);


	const addToFireBase = useCallback(()=>{
		// TBD check input errors

				const date = new Date();
	      const createDateMSec = date.valueOf();
	      const createDate = date.toString();
        if(!user.uid){
          console.log("Please login before adding activity");
        }
				const uid = user.uid? user.uid: "loggedOut";
				const email = user.email? user.email: "loggedOut";
				const displayName = user.displayName? user.displayName: "loggedOut";
        const ageRange = (1000*minAge + maxAge);
				const newAct = {
                        category,
                        topic,
                        title,
                        url,
                        description,
                        time,
                        ageRange,
                        rating,
                        createDateMSec,
                        createDate,
					              uid,
                        email,
                        displayName,
                        active};
				dispatch(addActivity(newAct, onAddtoFirebase));

	},[category, topic, time, maxAge, minAge, rating, title, url,user, onAddtoFirebase,description, dispatch]);



  const menu = (type, stateProp, list, propSetter, mayAdd=false)=>{
    if(!list)
    	return "";
    return(<ClickOut onClick={()=>handleClickOut(type)}>
              <Box onClick={()=>toggle(type)} red={showError &&(!stateProp)}>
              {stateProp? stateProp:type}
              </Box>
              <Menu visible={open ===type}>
              {
                list.map(x=>(<MenuItem key={`menuItem_${x}`} onClick={()=>onChangeProp(x,type,propSetter)}>{x}</MenuItem>))
              }

              {mayAdd&& <MenuItem>
                          <TextInput onChange={event =>setNewItem(event.target.value)}></TextInput>
                          <Button onClick={()=>{addToList(type)}}>addToList</Button>
                        </MenuItem>
              }
              {mayAdd && (newItem!=="") && <MenuItem>
                                              <Box>Add {newItem} to {type} list?</Box>
                                            </MenuItem>
              }
              </Menu>
            </ClickOut>
    )
  }



  if(!topics || topics===undefined)//await return of topics from firebase
  return (<Page>
  						<H1>loading topics</H1>
 						<Spinner/>
 					</Page>)
          //else:
	return (
    <Page>
      <Row>
				<Button onClick={()=>{addToFireBase()}}>addToFireBase</Button>
				<H1>{ID}</H1>
			</Row>
			<Row>
				{menu("CATEGORY", category, categorys,setCategory)}
				{menu("TOPIC", topic, topics, setTopic, true)}
			</Row>
      <TextInput onChange={event =>setTitle(event.target.value)} lable="Title" placeholder="Add your title here"/>
      <TextInput onChange={event =>setUrl(event.target.value)} placeholder="url">url</TextInput>
      <KeyVal keyName="description" value={description} onChange={setDescription}/>
      <TextInput onChange={event =>setTime(event.target.value)} placeholder="duration">duration</TextInput>
      <TextInput onChange={event =>setMinAge(event.target.value)} placeholder="minAge">minAge</TextInput>
      <TextInput onChange={event =>setMaxAge(event.target.value)} placeholder="maxAge">maxAge</TextInput>
      <TextInput onChange={event =>setRating(event.target.value)} placeholder="rating">rating</TextInput>
      <TextInput onChange={event =>setUpload(event.target.value)}>{upload}</TextInput>
      <H1>Image</H1>
			<FileLoader width="100%" onDone={obj=>{setUpload(obj.downloadURL)}}/>
    </Page>
	);
};

	// <FileLoader onDone={obj=>{setUpload(obj.downloadURL)}}/>

const mapStateToProps = state => {
	return {
		user: state.user
	};
};
export default connect(mapStateToProps)(AddActivityTmp4Esther);

const Page = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: 20px;
`;

const H1 = styled.div`
	font-size: 20px;
	font-weight: bold;
  margin: 20px;
	color: ${({theme,red})=> red && theme.r500};
`;

const Row = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	left:0px;
`;


const Box = styled.div`
	min-width: 120px;
	height: 32px;
	border-radius: 2px;
	background: black;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	color: #fff;
	font-weight: 200;
	transition: all 300ms;
  margin: 5px;

	&:hover {
		background: ${({theme}) => theme.a500};
	}

	background: ${({theme,red})=> red && theme.r500};
`;

const Menu = styled.div`
	width: 180px;
	min-height: 100px;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 2px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	position: absolute;
	top: calc(100% + 18px);
	left: 0;
	overflow: hidden;
	transition: all 300ms;
	pointer-events: none;
	opacity: 0;
	visibility: hidden;
	margin-top: -10px;

	${({visible}) => visible && `
		pointer-events: all;
		opacity: 1;
		visibility: visible;
		margin-top: 0px;
	`};
`;

const MenuItem = styled.div`
	font-size: 14px;
	width: 100%;
	min-height: 40px;
	border-bottom: 1px solid ${({theme}) => theme.p100};
	display: flex;
	align-items: center;
  flex-direction: row;
	cursor: pointer;
	transition: all 300ms;
	box-sizing: border-box;
	padding: 0 10px;

	&:hover {
		background: ${({theme}) => theme.a100};
	}

	&:last-child {
	border: none;
	}
`;

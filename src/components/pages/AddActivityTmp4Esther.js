import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, connect} from "react-redux";

import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';


import { CATEGORIES } from '../../utils/enums';
// components

import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ClickOut from '../common/ClickOut';
import Spinner from '../common/Spinner';
import FileLoader from '../common/FileLoader';
import { DropdownButton, DropdownItem } from 'react-bootstrap';

import {addActivity} from "../../redux/actions/activity.actions";

const AddActivityTmp4Esther = ({history, user}) => {
	const dispatch = useDispatch();

	//dropdown state:
	const [open, setOpen] = useState(null);//for dropdown menus
	const [newItem, setNewItem] = useState("");//for adding a topics

	//question state:
	const [ID, setID] = useState("");
	const [category, setCategory] = useState("other");//drop down list
  const [title, setTitle] = useState("New activity");
	const [url, setUrl] = useState("none");//
	const [description, setDescription] = useState("none");
	const [time, setTime] = useState(0);//in minutes
	const [minAge, setMinAge] = useState(0);//optional
	const [maxAge, setMaxAge] = useState(120);//optional


  const [showError, setShowError] = useState("");
	const [upload,setUpload] = useState(null);


	const marks = {
  15: '15',
  30: '30',
  45: '45',
  60: '60+',
};
	const marksAge = {
  1: '1',
  3: '3',
  5: '5',
  7: '7',
  10: '10',
  12: '12',
  14: '14',
  16: '16',
  18: '18+',
};

	//technology: TBD?
  //isPDF
  //isAndroid
  //isiOS
  //isChrome
  //isFirefox
  //isIE



  const categories = Object.keys(CATEGORIES);
  //const topics = ["topic1","topic2","topic3","topic4"];
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


  const onAgeRangeChange = useCallback(value=>{
    setMinAge(value[0]);
    setMaxAge(value[1]);
  },[setMinAge, setMaxAge]);


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
        const minMaxAgeRange = (1000*minAge + maxAge);
				const newAct = {
                        category,
                        title,
                        url,
                        description,
                        time,
												minAge,
												maxAge,
                        minMaxAgeRange,
                        createDateMSec,
                        createDate,
					              uid,
                        email,
                        displayName,
                        active};
				dispatch(addActivity(newAct, onAddtoFirebase));

	},[category, time, maxAge, minAge, title, url,user, onAddtoFirebase,description, dispatch]);



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



  if(false)//TBD: if(!topics || topics===undefined)//await return of topics from firebase
  return (<Page>
  						<H1>loading topics</H1>
 						<Spinner/>
 					</Page>)
          //else:
	return (
    <Page>
			<H1>ADD A NEW ACTIVITY</H1>
			<Row>
	      <Col width="30%">

					<H1>{ID}</H1>

					<TextInput label="Activity type" placeholder={category}/>
					<DropdownButton title="Select a category" onChange={e=>setCategory(e)}>
							{categories.map(item => <DropdownItem key={item}>{item}</DropdownItem>)}
	        </DropdownButton>
					<TextInput onChange={event =>setUrl(event.target.value)} label="Link to activity (optional)" placeholder="Copy and paste the activity’s web address">url</TextInput>
		      <TextInput onChange={event =>setTitle(event.target.value)} label="Activity title" placeholder="Name your activity"/>
		      <TextInput onChange={event =>setDescription(event.target.value)} label="Activity description (optional)" placeholder="Describe your activity in detail"/>
					<Label>Activity duration (estimated)</Label>
					<Slider min={0} max={60} marks={marks} railStyle={{backgroundColor:'#9013fe'}} onAfterChange={value=>setTime(value)}/>
					<Label>Suitable for ages</Label>
					<Range min={0} max={18} marks={marksAge} railStyle={{backgroundColor:'#9013fe'}} onAfterChange={value=>onAgeRangeChange(value)}/>
				</Col>
				<Col width="60%">
					<FileLoader width="100%" onDone={obj=>{setUpload(obj.downloadURL)}}/>
					<TextInput onChange={event =>setUpload(event.target.value)} label="Picture URL (optional)" defaultValue={upload}/>
					<SaveCancel>
						<Button onClick={()=>{history.push('/rewards')}} secondary>Cancel</Button>
						<Button onClick={()=>{addToFireBase()}}>Save</Button>
					</SaveCancel>
				</Col>
			</Row>
    </Page>
	);
};

	// <FileLoader onDone={obj=>{setUpload(obj.downloadURL)}}/>
	//{menu("CATEGORY", category, categories,setCategory)}
	// <TextInput onChange={event =>setUpload(event.target.value)}>{upload}</TextInput>

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
	justify-content: flex-start;
	align-items: flex-start;
	box-sizing: border-box;

`;

const H1 = styled.div`
	font-size: 2rem;
	font-weight: 500;
	line-height: 1.2;
	color: ${({theme})=> theme.purple1};
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-around;
	margin-top: 20px;
	left:0px;
`;

const SaveCancel = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-self: flex-end;
	position: absolute;
	bottom: 0;
	right: 0;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: 0px 20px 20px 0px;
`;

const Label = styled.div`
	font-size: 16px;
	min-height: 20px;
	width: 100%;
	margin-top: 30px;
	color: ${({theme})=> theme.purple2};
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

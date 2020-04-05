import React, { useCallback,useState,useRef} from 'react';
import {useDispatch, connect} from "react-redux";
import './list.scss'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import {addNewListForUser, deleteListByUser, updateListData} from '../../../redux/actions/list.actions';

import { ListItem } from './listItem';
import { ActiveityInfo } from '../../common/activeityInfo/activeityInfo';

 const List = ({user,itemListComponent}) => {
    const [menuPos, setMenuPos] = useState(null);
    const [isMenuopen, setIsMenuOpen] = useState(false);
    const [currentListID, setCurrentListID] = useState(null);
    const [activityInfo, setActivityInfo] = useState(null);

    // add list popup
    const [show, setShow] = useState(false);
    const [popupType, setPopupType] = useState("");

    const inputText = useRef(null);


    const dispatch = useDispatch();

    const popUp = () =>{
      let modalTitle = "";
      let handlerClick = ()=>{};
      let saveText = "Done";
      switch(popupType){
        case "newList":
          modalTitle = "Add a new list";
          handlerClick = handleAddList;
          saveText = "Add";
          break;
        case "rename":
          modalTitle = "Rename the list";
          handlerClick = renameList;
          break;
        case "duplicate":
          modalTitle = "copy the list";
          handlerClick = duplicateList;
          break;
        default:
          modalTitle = "Modal";
          handlerClick = ()=>{};
          break;
      }

      return(
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input ref={inputText} type="text"/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlerClick}>
                    {saveText}
                </Button>
            </Modal.Footer>
        </Modal>
      )

    }
    const handleAddList = () => {
        const data = {title: inputText.current.value};
        dispatch(addNewListForUser({user,data}));
        setShow(false);
    }

    const openMenu = (e, listID = null) => {
        setCurrentListID(listID);
        const pos = {
            x: e.clientX,
            y : e.clientY
        }

        setIsMenuOpen(true);
        setMenuPos(pos);
    }

    const closeMenu = () => {
        setCurrentListID(null);
        setIsMenuOpen(false)
    }


    // Menu pop-up functions

    const renameList = () => {
      //make a shallow copy and change title
      const found = itemListComponent.find(list=>list.id===currentListID)
      const data = {...found, title: inputText.current.value};
      dispatch(updateListData({user,data}));
      setShow(false);
    }

    const duplicateList = () => {
      const found = itemListComponent.find(list=>list.id===currentListID);
      const title = `Copy of ${found.title}`;
      const data = {...found, title};
      dispatch(addNewListForUser({user,data}));
      setShow(false);
    }

    const ester_resetList = () => {
        console.log("ester_resetList");
    }

    const fullReset = () => {
        //make a shallow copy and reset assignedActs
        const found = itemListComponent.find(list=>list.id===currentListID)
        const data = {...found, assignedActs:null};
        dispatch(updateListData({user,data}));
    }

    const updateListProgress = (listData) => {
        //make a shallow copy and reset assignedActs
        const found = itemListComponent.find(list=>list.id===currentListID)
        const data = {...found, assignedActs:listData};
        dispatch(updateListData({user,data}));
        //TODO: ester -  retun  after dispatch old list and not updated list
    }


    const deleteList = useCallback(() => {
  		  dispatch(deleteListByUser({user, currentListID}));

  	}, [dispatch, user, currentListID]);


    return (
        <div>
            <div className="header">
            <h2 className="header">
            <span>ACTIVITY LIST</span>
                <small>Edit your todo lists</small>
            </h2>
            </div>
            <main>
                <div className="horizontal">


                    {itemListComponent.map( (item, index) =>
                        <ListItem
                            key={index}
                            updateListProgress={updateListProgress}
                            data={item}
                            showActivity={setActivityInfo}
                            openMenuFunc={e =>openMenu(e,item.id)}/> )}


                    <div className="addList">
                        <header>
                            <div className="header2">
                            <div className="plus"></div>
                                <h2>New List</h2>
                            </div>
                        </header>
                        <div onClick={()=>{setPopupType("newList");setShow(true)}} className="bigPlus"></div>
                    </div>
                </div>
            </main>

            {menuPos && isMenuopen && <div className="menu" style={{left: menuPos.x - 170, top: menuPos.y}}>
                    <img onClick={closeMenu} className="closeMenuBtn" src={require('./images/more.png')} alt="closeMenuBtn"/>
                    <p onClick={()=>{setPopupType("rename");setShow(true)}}>Rename list</p>
                    <p onClick={duplicateList}>Duplicate list</p>
                    <p onClick={ester_resetList}>Reset list (all undone)</p>
                    <p onClick={fullReset}>Full reset(remove all)</p>
                    <p onClick={deleteList} className="deleteList">Delete list</p>
                </div>}



        <div className="addListPopUp">
          {popUp()}

        </div>
        <ActiveityInfo closeCb={setActivityInfo} activity={activityInfo} />
        </div>
    )
};

const mapStateToProps = state => {
	return {
		user: state.user,
    itemListComponent: state.lists
	};
};
export default connect(mapStateToProps)(List);

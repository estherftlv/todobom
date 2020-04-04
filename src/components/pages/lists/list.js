import React, { useCallback,useState,useRef} from 'react';
import {useDispatch, connect} from "react-redux";
import './list.scss'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import {addNewListForUser, deleteListByUser} from '../../../redux/actions/list.actions';

import { ListItem } from './listItem';

 const List = ({user,itemListComponent}) => {
    const [menuPos, setMenuPos] = useState(null);
    const [isMenuopen, setIsMenuOpen] = useState(false);
    const [listName, setListName] = useState('default')
    const [currentListID, setCurrentListID] = useState(null);

    // add list popup
    const [show, setShow] = useState(false);

    const inputText = useRef(null);


    const dispatch = useDispatch();


    const ester_handleAddList = () => {
        const data = {title: inputText.current.value};
        dispatch(addNewListForUser({user,data}));
        setShow(false);
    }

    // add list item component

    function addList() {
        // new List
        const newI = {name:`${listName} ${itemListComponent.length + 1}`}
        //setItemList([...itemListComponent , newI])
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

    const ester_renameList = () => {
        // setListName('name from fireBase')
        console.log("ester_renameList");
    }

    const ester_duplicateList = () => {
        console.log("ester_duplicateList");
    }

    const ester_resetList = () => {
        console.log("ester_resetList");
    }

    const ester_fullReset = () => {
        console.log('ester_fullReset');
    }


    const deleteList = useCallback(() => {
  		  dispatch(deleteListByUser({user, currentListID}));

  	}, [currentListID]);


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


                    {itemListComponent.map( item => <ListItem key={item.id} data={item} openMenuFunc={e =>openMenu(e,item.id)}/> )}


                    <div className="addList">
                        <header>
                            <div className="header2">
                            <div className="plus"></div>
                                <h2>New List</h2>
                            </div>
                        </header>
                        <div onClick={()=>setShow(true)} className="bigPlus"></div>
                    </div>
                </div>
            </main>

            {menuPos && isMenuopen && <div className="menu" style={{left: menuPos.x - 170, top: menuPos.y}}>
                    <img onClick={closeMenu} className="closeMenuBtn" src={require('./images/more.png')} alt="closeMenuBtn"/>
                    <p onClick={ester_renameList}>Rename list</p>
                    <p onClick={ester_duplicateList}>Duplicate list</p>
                    <p onClick={ester_resetList}>Reset list (all undone)</p>
                    <p onClick={ester_fullReset}>Full reset(remove all)</p>
                    <p onClick={deleteList} className="deleteList">Delete list</p>
                </div>}



        <div className="addListPopUp">

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new list</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input ref={inputText} type="text"/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(true)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ester_handleAddList}>
                        Add List
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

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

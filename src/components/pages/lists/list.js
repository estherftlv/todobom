import React from 'react'
import './list.scss'
import { ListItem } from './listItem';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const List = () => {
    const [itemListComponent, setItemList] = useState([]);
    const [menuPos, setMenuPos] = useState(null);
    const [isMenuopen, setIsMenuOpen] = useState(false);
    const [listName, setListName] = useState('default')

    // add list popup

    const addListInput = React.createRef();

    const [show, setShow] = useState(false);


    const ester_handleAddList = () => {
        const name = addListInput.current.value;
        setListName(name);
        addList();
        setShow(false);
    }

    // add list item component

    function addList() {
        // new List
        const newI = {name:`${listName} ${itemListComponent.length + 1}`}
        setItemList([...itemListComponent , newI])
    }

    const openMenu = (e, listID = null) => {
        const pos = {
            x: e.clientX,
            y : e.clientY
        }

        setIsMenuOpen(true);
        setMenuPos(pos);
    }

    const closeMenu = () => {
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

    const ester_deleteList = () => {
        console.log('ester_deleteList');
    }


    return (
        <div>
            <div className="header">
            <h2 className="header">
            <span>ACTIVITY LIST</span>
                <small>Edit and monitor activity lists</small>
            </h2>
            </div>
            <main>
                <div className="horizontal">


                    {itemListComponent.map( item => <ListItem key={item.name} name={listName} openMenuFunc={openMenu}/> )}


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
                    <p onClick={ester_resetList}>Reset list (keep undone)</p>
                    <p onClick={ester_fullReset}>Full reset(remove all)</p>
                    <p onClick={ester_deleteList} className="deleteList">Delete list</p>
                </div>}



        <div className="addListPopUp">

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new list</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input ref={addListInput} type="text"/>
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
}

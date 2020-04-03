import React from 'react'
import './list.scss'
import { ListItem } from './listItem';
import { useState } from 'react';

export const List = () => {
    const [itemListComponent, setItemList] = useState([]);
    const [menuPos, setMenuPos] = useState(null);
    const [isMenuopen, setIsMenuOpen] = useState(false);


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




    const user = {
        name: "Amalia"
    }

    function addList() {
        // Pop-up

        // new List
        const newI = {name:`${user.name} ${itemListComponent.length + 1}`}        
        setItemList([...itemListComponent , newI])
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

                    
                    {itemListComponent.map( item => <ListItem key={item.name} name={user.name} openMenuFunc={openMenu}/> )}
                    

                    <div className="addList">
                        <header>
                            <div className="header2">
                            <div className="plus"></div> 
                                <h2>New List</h2> 
                            </div>
                        </header>
                        <div onClick={addList} className="bigPlus"></div>
                    </div>
                </div>
            </main>

            {menuPos && isMenuopen && <div className="menu" style={{left: menuPos.x - 170, top: menuPos.y}}>
                    <img onClick={closeMenu} className="closeMenuBtn" src={require('./images/more.png')}/>
                    <p onClick={ester_renameList}>Rename list</p>
                    <p onClick={ester_duplicateList}>Duplicate list</p>
                    <p onClick={ester_resetList}>Reset list (keep undone)</p>
                    <p onClick={ester_fullReset}>Full reset(remove all)</p>
                    <p onClick={ester_deleteList} className="deleteList">Delete list</p>
                </div>}

        </div>
    )
}



import React from 'react'
import './list.scss'
import { ListItem } from './listItem';
import { useState } from 'react';

export const List = () => {
    const [itemListComponent, setItemList] = useState([]);

    const user = {
        name: "Amalia"
    }

    function addList() {
        const newI = {name:`${user.name} ${itemListComponent.length + 1}`}        
        setItemList([...itemListComponent , newI])
    }


    return (
        <div>
            <div class="header">
            <h2 className="header">
            <span>ACTIVITY LIST</span>
                <small>Edit and monitor activity lists</small>
            </h2>    
            </div>
            <main>
                <div class="horizontal">

                    
                    {itemListComponent.map( item => <ListItem key={item.name} name={user.name}/> )}
                    

                    <div className="addList">
                        <header>
                            <div class="header2">
                            <div class="plus"></div> 
                                <h2>New List</h2> 
                            </div>
                        </header>
                        <div onClick={addList} class="bigPlus"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}



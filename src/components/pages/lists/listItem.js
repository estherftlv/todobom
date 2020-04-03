import React, { useState } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import { Activity } from './activity'


export const ListItem = ({name}) => {
    const lists = [45 , 120 , 245];
    const max = Math.max(...lists);
    const min = Math.min(...lists);
    const [progress, setProgress] = useState(120);
    const one = max / 100;

    // Menu
    const [menuPos, setMenuPos] = useState(null);
    const [isMenuopen, setIsMenuOpen] = useState(false);
    // List property
    const [listName, setListName] = useState('name')
    const [activities, setActivities] = useState([])

    const listPosition = lists.map(lists =>({pos : lists / one, value: lists }));

    const openMenu = (e) => {
        const pos = {
            x: e.clientX,
            y : e.clientY
        }
        
        setIsMenuOpen(true)
        setMenuPos(pos)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    
    // Menu pop-up functions

    const ester_renameList = () => {
        setListName('name from fireBase')
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
        <div className="listItem">
            
            <header>
                <div className="headerAndMore">
                    <h2>{listName}</h2>
                    <div onClick={openMenu}/>
                </div>

                <div className="prograss">
                {listPosition.map((item,i)=>
                    <span key={item.pos} className={progress >= item.value ? 'green' : ''} style={{left:`${item.pos}%`}}>
                        <Present style={{left: `${i === listPosition.length - 1 ? '-30px' : '-17px'}`}}/>
                    </span>)
                }
                    <div className="fill" style={{width:`${progress / one }%`}}/>
                </div>  
                
            
                <div className="feedBack">
                    <div className="checkBoxArea">
                        <input type="checkbox" className="checkBox"/>
                        <img src={require("./images/time-gray.png")} alt="clock"/>
                        <p>60 min</p>
                    </div>

                    <div className="titleArea">
                        <span className="howWasIt">How was it?</span>
                        <img className="recommend" src={require('./images/recommend.png')}/>
                        <img className="unRecommend" src={require('./images/un-recommend.png')}/>
                    </div>
                </div>

                <Activity></Activity>

            </header>
            
            {/* Popup */}
            {menuPos && isMenuopen && <div className="menu" style={{left: menuPos.x - 277, top: menuPos.y - 182}}>
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

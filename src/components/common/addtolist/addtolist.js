import React, { useState, useEffect } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";
import './addtolist.scss';

export const Addtolist = ({pos , list , addFunction , tolgglePopup}) => {
    const [ , setIsOpen] = useState(false);
    const [addInput , setAddInput] = useState(false);
    const [lists , setLists] = useState(list);

    useEffect(() => {
        if(pos){
            setIsOpen(true);
        }
    },[pos])

    useEffect(() => {
        setLists(list)
    },[list])

    const addInputChange=(e)=>{
        if(e.key === 'Enter'){
            checkListBeforeInsert(e);
        }
    }

    const checkListBeforeInsert = (e) =>{
        const value = e.target.value;
        const newVal = {title: value};
        const inlist = lists.filter(item=> item.title === value)

        if(inlist.length === 0){
            setLists([...lists, newVal]);
            //TODO: ester-  this is the cb funvtion for the firebase for add to list - from markeatplce js 
            addFunction(newVal);
        }
        //setAddInput(false);
    }

    const assingActiveToList = (e, item, acti) => { 
        if(e.target.checked){ // is slected
            // TODO: ester = add to list...
            console.log(item, pos.activityId);
        } else{
            //todo: ester = remove from list
        }
    }

    return (
        pos &&
        <div className="addtolist" style={{top: pos.y - 15 , left: pos.x - 105}}>
            <h6>ADD TO LIST <IoIosClose onClick={()=>{tolgglePopup(null)}}/> </h6>
            {
            lists.map((item, index) => <div key={index} className="inListCheckbox">
                        <input type="checkbox" id={`checkBox_${index}`} onChange={(e)=> assingActiveToList(e, item)}/>
                        <FaCheck className="checkboxV"/>
                        <label className="container" htmlFor={`checkBox_${index}`}>
                        {item.title}
                        </label>
            </div> )
            }

            {
                !addInput ?
                <span className="addList" onClick={()=>setAddInput(true)}><FaPlus/>Create new list</span> :
                <input type="text" onKeyPress={addInputChange} onBlur={checkListBeforeInsert}/>
            }
        </div>
    )
}

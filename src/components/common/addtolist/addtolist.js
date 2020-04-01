import React, { useState, useEffect } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";
import './addtolist.scss';

export const Addtolist = ({pos , list , addFunction , tolgglePopup}) => {
    const [isOpen , setIsOpen] = useState(false);
    const [addInput , setAddInput] = useState(false);

    useEffect(() => {
        if(pos){
            setIsOpen(true);
        }
    },[pos])

    const addInputChange=(e)=>{
        if(e.key === 'Enter'){
            checkListBeforeInsert(e);
        }
    }

    const checkListBeforeInsert = (e) =>{
        const value = e.target.value;
        if(!list.includes(value) && value){
            addFunction(value);
        }
        setAddInput(false);
    }

    return (
        pos &&
        <div className="addtolist" style={{top: pos.y - 15 , left: pos.x - 105}}>
            <h6>ADD TO LIST <FaPlus/> <IoIosClose onClick={()=>{tolgglePopup(null)}}/> </h6>
            {
            list.map((item, index) => <div key={index} className="inListCheckbox">
                        <input type="checkbox" id={`checkBox_${index}`}/>
                        <FaCheck className="checkboxV"/>
                        <label class="container" htmlFor={`checkBox_${item.Title}`}>
                        {item.Title}
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

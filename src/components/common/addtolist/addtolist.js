import React, { useState, useEffect } from 'react'
import './addtolist.scss'

export const Addtolist = ({pos}) => {
    const [isOpen , setIsOpen] = useState(false)

    useEffect(() => {
        if(pos){
            setIsOpen(true);
        }
    },[pos])

    return (
        isOpen &&
        <div className="addtolist" style={{top: pos.y - 15 , left: pos.x - 15}}>
            add to list
        </div>
    )
}

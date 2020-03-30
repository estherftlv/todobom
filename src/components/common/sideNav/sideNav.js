import React, { useEffect, useState } from 'react'
import './sideNav.scss';
import {FaToolbox , FaTasks , FaCaretLeft} from 'react-icons/fa'
import {IoIosGift , IoMdSettings} from 'react-icons/io'
import { Link } from 'react-router-dom';


export default function SideNav({onClick , active =''}) {
    const [activeUrl , setActiveUrl] = useState('')

    useEffect(() => {
        setActiveUrl(active.split('/')[1]);
        console.log(activeUrl)
    },[active , activeUrl])




    return (
        <div className="sideNav">
            <div className="actions">
                <Link to="/marketplace" className="linkNav sideNavIcon">
                    <FaToolbox className="sideNavIcon"/>
                    {activeUrl === 'marketplace' && <FaCaretLeft className="activeIcon"/>}
                </Link>
                <Link to="/list" className="linkNav sideNavIcon">
                    <FaTasks className="sideNavIcon"/>
                    {activeUrl === 'list' && <FaCaretLeft className="activeIcon"/>}
                </Link>
                <Link to="/rewards" className="linkNav sideNavIcon">
                    <IoIosGift className="sideNavIcon"/>
                    {activeUrl === 'rewards' && <FaCaretLeft className="activeIcon"/>}
                </Link>
            </div>
            <Link to="/setting" className="linkNav sideNavIcon">
                <IoMdSettings className="sideNavIcon setting"/>
            </Link>
        </div>
    )
}

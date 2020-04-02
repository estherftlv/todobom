import React, { useEffect, useState } from 'react'
import './sideNav.scss';
import {FaToolbox , FaTasks , FaCaretLeft} from 'react-icons/fa'
import {IoIosGift , IoMdSettings} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user.actions';
import { ReactComponent as Logout } from './logout.svg'; 
import { ReactComponent as Audit } from './audit.svg'; 
import { ReactComponent as Present } from './present.svg'; 


export default function SideNav({onClick , active =''}) {
    const [activeUrl , setActiveUrl] = useState('');
    const dispatch = useDispatch();

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
                    <Audit className="sideNavIcon"/>
                    {activeUrl === 'list' && <FaCaretLeft className="activeIcon"/>}
                </Link>
                <Link to="/rewards" className="linkNav sideNavIcon">
                    <Present className="sideNavIcon"/>
                    {activeUrl === 'rewards' && <FaCaretLeft className="activeIcon"/>}
                </Link>
            </div>
            <Logout className="sideNavIcon setting" onClick={() => dispatch(logout())}/>
            {/* <IoMdSettings className="sideNavIcon setting" onClick={() => dispatch(logout())}/> */}
        </div>
    )
}

import React from 'react';


import * as style from './marketplace.module.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user.actions';

const Marketplace  = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <Button onClick={() => dispatch(logout())}>Logout</Button> 
            <h1>Marketplace</h1>
        </>
    )
}

export default Marketplace;
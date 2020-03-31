import React from 'react';


import style from './marketplace.module.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Activity from '../../common/activity/activity';

const Marketplace  = () => {

    const searchChange =(e) =>{
        console.log(e.target.value);
    }   

    return (
        <>
        <h2 className={style.header}>
        <span>MARKETPLACE</span>   
        <InputGroup className={style.search}>
            <InputGroup.Append>
                <InputGroup.Text style={{backgroundColor:'transparent', borderRight: 'none'}} id="basic-addon2"><FaSearch/> </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
                style={{backgroundColor:'transparent', borderLeft: 'none'}}
                onChange= {searchChange}
            />
            </InputGroup>
            <Button><FaPlus/>Add Activity</Button> 
            <small>Pick your favorite activities and add them to your lists</small>
        </h2>
        <div className={style.activities}>
            <Activity time={30} description="Activity is veary cool to be ther tand a asa asdasd a asdasd asdasd asdasd asdkpoi  sdasd "/>
            <Activity time={90}/>
            <Activity time={10}/>
            <Activity time={30}/>
            <Activity time={90}/>
            <Activity time={10}/>
            <Activity time={30}/>
            <Activity time={90}/>
            <Activity time={10}/>
        </div>
        </>
    )
}

export default Marketplace;
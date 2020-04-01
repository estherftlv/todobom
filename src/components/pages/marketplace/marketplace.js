import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';

import {fetchActivities} from '../../../redux/actions/activity.actions';

import style from './marketplace.module.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Activity from '../../common/activity/activity';
import { Addtolist } from '../../common/addtolist/addtolist';

const Marketplace  = ({activities, user}) => {

    const [listPopupPos , setListPopupPos] = useState(false);
    const dispatch = useDispatch();

    const searchChange =(e) =>{
        console.log(`typed search for: ${e.target.value}`);
    }
    const faSearchClicked =() =>{
        dispatch(fetchActivities(""));
    }

    const toggleActivityToList = (pos = null) =>{
        setListPopupPos(pos);
    }

    return (
        <>
        <h2 className={style.header}>
        <span>MARKETPLACE</span>
        <InputGroup className={style.search}>
            <InputGroup.Append>
                <InputGroup.Text style={{backgroundColor:'transparent', borderRight: 'none'}} id="basic-addon2"><FaSearch onClick={faSearchClicked}/> </InputGroup.Text>
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
            {
                activities.map(activity => <Activity key={activity.id} activity={activity} plusClick={toggleActivityToList}/>)
            }
        </div>
        <Addtolist pos={listPopupPos}/>
        </>
    )
}

const mapStateToProps = state => ({
	activities: state.activities,
	user:state.user
});

export default connect(
	mapStateToProps, // read from redux
)(Marketplace);

import React, { useState, useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchActivities} from '../../../redux/actions/activity.actions';

import style from './marketplace.module.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Activity from '../../common/activity/activity';
import { Addtolist } from '../../common/addtolist/addtolist';
import ActivityFilter from '../../common/activityFilter/activityFilter';

const Marketplace  = ({activities, user}) => {

    const [listPopupPos , setListPopupPos] = useState(false);
    // TODO: get the list from firebase
    const [list , setList] = useState([]);
    const [filters , setFilter] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        faSearchClicked();
    },[])

    const searchChange =(e) =>{
        console.log(`typed search for: ${e.target.value}`);
    }
    const faSearchClicked =() =>{
        dispatch(fetchActivities(""));
    }

    const toggleActivityToList = (pos = null) =>{
        setListPopupPos(pos);
    }

    // TODO: add the firebase api 
    const addToList = (data) =>{
        console.log(data)
        setList([...list, data])
    }

    const addFilter = (type, value)=>{
        if(type === 'category'){
            if(filters[type] && filters[type].includes(value)){
                filters[type].splice(filters[type].indexOf(value),1);
            }else{
                filters[type] = filters[type] ?  [...filters[type], value] : [value];
            }
        } else{
            filters[type] = value;
        }


        setFilter({...filters})
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
            <Link to={'/addActivity'}><Button><FaPlus/>Add Activity</Button></Link>
            <small>Pick your favorite activities and add them to your lists</small>
        </h2>
        <div className={style.activities}>
            {
                activities.map(activity => <Activity key={activity.id} activity={activity} plusClick={toggleActivityToList}/>)
            }
        </div>
        <Addtolist list={list} addFunction={addToList} pos={listPopupPos} tolgglePopup={toggleActivityToList}/>
        <ActivityFilter addFilter={addFilter}/>
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

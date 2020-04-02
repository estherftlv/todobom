import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../../common/Button';
import style from './activityList.module.css';
import { useState } from 'react';


const ActivityList = ({history, user}) => {
    const dispatch = useDispatch();
    const [rewardsNum, setRewardsNum] = useState([]);

    // let numberOfrewardsToRender = 0;

    function addReward() {
        const newR = {name:`Reward #${rewardsNum.length + 1}`}        

    
        setRewardsNum([...rewardsNum , newR])
    }

	return (
        <>
            <h1 className={style.header}>Activity List</h1>
            <h2 className={style.subHeader}>Edit and monitor activity list</h2>

            <ListContainer>
                <ActivityContainer>
                    <div className={style.headerContainer}>
                        <h2>Amalia</h2>

                        {/* more btn */}
                        <div></div>
                    </div>

                    <div className={style.progressPeresentContainer}>

                    </div>

                    {/* Activity component */}
                    <div className={style.activityContainer}>
                        <div className={style.activityHeader} >
                            <div className={style.checkBoxArea}>
                                <input type="checkbox" className={style.checkBox}/>
                                <img src={require("./images/time.png")} alt="clock"/>
                                <p>60 min</p>
                            </div>
                            <div className={style.titleArea}></div>
                        
                        
                        {/* <label className="filterCat" key={key} style={{backgroundColor: `${cat.color}`}}>
                                    {cat.text}
                                    <input type="checkbox" value={key} onChange={()=>addFilter('category', key)}/>
                                    <FaCheck className="checkboxV" />
                                </label> */}
                        
                        </div>
                    </div>
                </ActivityContainer>
            </ListContainer>

        </>
	);
};




const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(withRouter(ActivityList));



const ListContainer = styled.div`
    min-height: 500px;
    width: 98%;
    border-radius: 4px;
`;

const ActivityContainer = styled.div`
    padding: 4px;
    margin-top: 20px;
    height: calc(100vh - 140px);
    width: 30%;
    background-color:  red;
    border: 1px solid #9013fe;
    border-radius: 4px;
`;


const NewRawardContainer = styled.div`
    min-height: 180px;
    margin: 45px auto 0;
    padding: 16px;
    border: 1px dashed #9013fe;
    border-radius: 4px;
`;
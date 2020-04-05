import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../../common/Button';
import style from './rewards.module.css';
import Reward from './reward'
import { useState } from 'react';


const Rewards = ({history, user}) => {
    const dispatch = useDispatch();
    const [rewardsComponent, setRewardsNum] = useState([]);


    function addReward() {
        const newR = {name:`Reward #${rewardsComponent.length + 1}`}        
        setRewardsNum([...rewardsComponent , newR])
    }

	return (
        <RewardsContainer>
            <h2 className={style.header}>Rewards</h2>
            <small className={style.subHeader}>Define rewards for activity completion</small>

            <div className={style.rewardContainer}>
                {rewardsComponent.map( (item,index) => <Reward key={item.name} defaultTime={(index+1) * 45} name={item.name}/> )}
            </div>
             


            <NewRawardContainer className={style.newRewardArea}>
                <div className={style.contentItemsCenter}>
                    <img src={require('./images/plus.png')} alt="present image"/>
                    <h2>NEW REWARD</h2>
                </div>
                <div onClick={addReward} className={style.plus}></div>
            </NewRawardContainer>

        </RewardsContainer>
	);
};




const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(withRouter(Rewards));



const RewardsContainer = styled.div`
    min-height: 500px;
    width: 98%;
`;


const NewRawardContainer = styled.div`
    min-height: 180px;
    margin: 45px auto 0;
    padding: 16px;
    border: 1px dashed #9013fe;
    border-radius: 4px;
`;
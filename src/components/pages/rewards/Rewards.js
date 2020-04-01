import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../../common/Button';
import style from './rewards.module.css';
//import Reward from './rewardComponent/Reward'


const Rewards = ({history, user}) => {
	const dispatch = useDispatch();
	return (
		<div>
            <MyContainer>
                <h1 className={style.header}>Rewards</h1>
                <h2 className={style.subHeader}>Define rewards for activity completion</h2>



                {/* Delete all the and put Component -> Reward */}
                <RawardContainer>
                    <div className={style.contentItemsCenter}>
                        <img src={require('./images/present.png')} alt="present image"/>
                        <h2 className={style.rewardTitle}>Reward #1</h2>
                    </div>

                    <div className={style.userImputContainer}>
                        <div  className={style.timeArea}>
                            <h4>Time to earn</h4>

                            <div className={style.timeInputContainer}>
                                <div className={style.first}>
                                    <input placeholder="45" type="number" max="4"/>
                                </div>
                                <div className={style.secound}>
                                    <span>min</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.descriptionArea}>
                            <h4>Reward description</h4>
                            <div className={style.contentItemsCenter}>
                                <input placeholder="Choose a tackout for the entrie family" type="text"/>
                                <div className={style.trash}></div>
                            </div>
                        </div>

                    </div>

                    {/* <Reward></Reward> */}
                </RawardContainer>

            </MyContainer>

            
        </div>
	);
};


const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(withRouter(Rewards));



const MyContainer = styled.div`
    min-height: 500px;
    width: 80%;
    margin: 0 auto;
`;

const RawardContainer = styled.div`
    min-height: 200px;
    margin: 45px auto 0;
    padding: 16px;
    border: 1px solid ${({theme}) => theme.light_purple};
    border-radius: 4px;
`;
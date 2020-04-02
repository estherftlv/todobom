import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../../common/Button';
import style from './reward.module.css';



const Reward = ({history, user, name}) => {
	const dispatch = useDispatch();
	return (
            <RawardContainer>
                <div className={style.contentItemsCenter}>
                    <img src={require('./images/present.png')} alt="present image"/>
                    <h2 className={style.rewardTitle}>{name}</h2>
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
            </RawardContainer>
	);
};


const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(withRouter(Reward));


const RawardContainer = styled.div`
    min-height: 200px;
    margin: 45px auto 0;
    padding: 16px;
    border: 1px solid #9013fe;
    border-radius: 4px;
`;
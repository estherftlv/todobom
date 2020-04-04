import React, { useState , useCallback, useRef } from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../../common/Button';
import style from './reward.module.css';
import {MdDone} from 'react-icons/md';



const Reward = ({name, defaultTime}) => {
    // const dispatch = useDispatch();
    const inputTime = useRef(null);
    const inputDiscription = useRef(null);
    const [isSave, setIsSave] = useState(false);
    const [isDesciptionValid, setIsDesciptionValid] = useState(true);
    const [isTimeValid, setIsTimeValid] = useState(true);


    const saveReward = useCallback(() => {
        
        let timeFlag = true;
        let descFlag = true;
        
        if (inputTime.current.value.length <= 0){
            timeFlag = false;
            setIsTimeValid(false);
        }else {
            setIsTimeValid(true);
        }
        
        if (inputDiscription.current.value.length <= 0){
            descFlag = false;
            setIsDesciptionValid(false);
        }else {
            setIsDesciptionValid(true);
        }


        ////TODO : Ester - save rewards in the block 
        if (timeFlag && descFlag){
            setIsSave(true);
            //TODO : Ester - save rewards to firebase + load them on initial
            //doSomething(a, b);
        }
        
    },
    []
    );
    
	return (
            <RawardContainer>
                <div className={style.contentItemsCenter}>
                    <img src={require('./images/present.png')} alt="present image"/>
                    <h2 className={style.rewardTitle}>{name}</h2>
                </div>

                <div className={style.userImputContainer}>
                    <div  className={style.timeArea}>
                        <h4>Time to earn</h4>

                        <div className={style.timeInputContainer}
                             style={{border: isTimeValid ? '2px solid #9013fe' : '2px solid #f75f5b'}}>

                            <div className={style.first}>
                                <input ref={inputTime} placeholder={defaultTime} type="number" min={defaultTime} max="999"/>
                            </div>
                            <div className={style.secound}>
                                <span>min</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.descriptionArea}>
                        <h4>Reward description</h4>
                        <div className={style.contentItemsCenter}>

                            <input 
                                ref={inputDiscription}
                                style={{border: isDesciptionValid ? '2px solid #9013fe' : '2px solid #f75f5b'}}
                                placeholder="Choose a tackout for the entrie family" type="text"/>

                            {!isSave && <MdDone className={style.save} onClick={saveReward}/>}        
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
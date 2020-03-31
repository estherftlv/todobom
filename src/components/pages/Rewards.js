import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../redux/actions/user.actions';
import styled from 'styled-components';
import Button from '../common/Button';


const Rewards = ({history, user}) => {
	const dispatch = useDispatch();
	return (
		<div>
            <MyContainer>
                <h1 style={{marginTop: 30, color: '#284355', fontSize: 50}}>Rewards</h1>
                <p style={{color: '#9013fe', fontSize: 20}}>Define rewards for activity completion</p>

                <RawardContainer style={{marginTop: 45, padding: 16}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src="/present.png" alt="present image"/>
                        <h2 style={{display : 'inline-block', color: "#7bec9f", margin: '0 auto 0  0',}}>Reward #1</h2>
                        <img src="/more.png" />
                    </div>

                    <div style={{ marginTop: 50}}>
                        <div style={{width: '100px', textAlign: 'center', display: 'inline-block', marginRight: 16}}>
                            <h4 style={{fontSize: '16px', fontWeight: 300, color: '#9013fe'}}>Time to earn</h4>

                            <div style={{border: '2px solid #9013fe', borderRadius: 4}}>
                                <div style={{width: '50%', display: 'inline-block', textAlign: 'center'}}>
                                    <input style={{width: '100%', height: '100%', textAlign: 'center', padding: 8, border: 'none'}} type="number" max="4"/>
                                </div>
                                <div style={{width: '50%', display: 'inline-block', textAlign: 'center', background: '#ae6be8', padding: 8}}>
                                    <span style={{color: '#9013fe', fontWeight: 500}}>min</span>
                                </div>
                            </div>
                        </div>

                        <div style={{width: '85%', display: 'inline-block'}}>
                            <h4 style={{fontSize: '16px', fontWeight: 300, color: '#9013fe'}}>Time to earn</h4>
                            <input style={{border: '2px solid #9013fe', borderRadius: 4, width: '100%', padding: 8}} type="text"/>
                        </div>

                    </div>


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
    margin: 0 auto;
    border: 1px solid ${({theme}) => theme.light_sea_green};
    border-radius: 4px;
`;
import React, { useState } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import { Activity } from './activity'


export const ListItem = ({history, user, name}) => {
    const rewards = [45 , 120 , 245]
    const max = Math.max(...rewards)
    const min = Math.min(...rewards)
    const [progress, setProgress] = useState(120)
    const one = max / 100;

    const rewardsPosition = rewards.map(reward =>{
        return {pos : reward / one, value: reward }
    })

    return (
        <div className="listItem">
            <header>
                <div class="headerAndMore">
                    <h2>{name}</h2> 
                    <img src={require('./images/more.png')}/> 
                </div>

                <div class="prograss">
                {rewardsPosition.map(item=>
                    <span key={item.pos} className={progress >= item.value ? 'green' : ''} style={{left:`${item.pos}%`}}>
                        <Present/>
                    </span>)
                }
                    <div class="fill" style={{width:`${progress / one }%`}}/>
                </div>  
                
            
                <div className="feedBack">
                    <div className="checkBoxArea">
                        <input type="checkbox" class="checkBox"/>
                        <img src={require("./images/time-gray.png")} alt="clock"/>
                        <p>60 min</p>
                    </div>

                    <div class="titleArea">
                        <span class="howWasIt">How was it?</span>
                        <img class="recommend" src={require('./images/recommend.png')}/>
                        <img class="unRecommend" src={require('./images/un-recommend.png')}/>
                    </div>
                </div>



                <Activity></Activity>


                


            </header>
            
        </div>
    )
}

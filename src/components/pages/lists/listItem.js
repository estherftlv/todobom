import React, { useState } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'


export const ListItem = () => {
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
            <h2>amalia</h2>  
            <div class="prograss">
            {rewardsPosition.map(item=>
                <span key={item.pos} className={progress >= item.value ? 'green' : ''} style={{left:`${item.pos}%`}}>
                    <Present/>
                </span>)
            }
                <div class="fill" style={{width:`${progress / one }%`}}/>
            </div>  
        </header>
        
        </div>
    )
}

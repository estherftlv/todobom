import React from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'


export const ListItem = () => {
    const rewards = [45 , 120 , 245]
    const max = Math.max(...rewards)
    const min = Math.min(...rewards)

    const rewardsPosition = rewards.map(reward =>{
        const one = max / 100;
        return {pos : reward / one, value: reward }
    })

    return (
        <div className="listItem">
        <header>
            <h1>amalia</h1>  
            <div class="prograss">
                {rewardsPosition.map(item=><span key={item.pos} style={{left:`${item.pos}%`}}><Present/></span>)}
                <div class="fill"/>
            </div>  
        </header>
        
        </div>
    )
}

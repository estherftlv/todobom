import React, { useState } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import './activity.scss'

export const ActivityInList = () => {

    return (
        <div className="activity">
            <div className="activityHeader" >
                <div className= "checkBoxArea">
                    <input type="checkbox" className="checkBox"/>
                    <img src={require("./images/time.png")} alt="clock"/>
                    <p>60 min</p>
                </div>

                <div className="titleArea">
                    <span>EDUCATIONAL</span>
                </div>                    
            </div>
                    

            <div className="activityBody">
                <div className="activityImage"></div>
                <div className="activityDescription">
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam molestiae voluptatibus eius placeat fuga magni laborum libero numquam aspernatur.</p>
                    </div>
                    <button className="dectMoreBtn">More</button>
                </div>
            </div>
        </div>
    )
}

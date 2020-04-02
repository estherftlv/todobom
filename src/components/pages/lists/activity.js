import React, { useState } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import './activity.scss'

export const Activity = () => {

    return (
        <div className="activity">
            <div class="activityHeader" >
                <div class= "checkBoxArea">
                    <input type="checkbox" class="checkBox"/>
                    <img src={require("./images/time.png")} alt="clock"/>
                    <p>60 min</p>
                </div>

                <div class="titleArea">
                    <span>EDUCATIONAL</span>
                </div>                    
            </div>
                    

            <div class="activityBody">
                <div class="activityImage"></div>
                <div class="activityDescription">
                    <div class='desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam molestiae voluptatibus eius placeat fuga magni laborum libero numquam aspernatur.</p>
                    </div>
                    <button class="dectMoreBtn">More</button>
                </div>
            </div>
        </div>
    )
}

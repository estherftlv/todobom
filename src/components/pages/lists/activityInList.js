import React from 'react'
import './listItem.scss'
//import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import './activity.scss'

export const ActivityInList = ({data}) => {

    return (
        <div className="activity">
            <div className="activityHeader" >
                <div className= "checkBoxArea">
                    <input type="checkbox" className="checkBox"/>
                    <img src={require("./images/time.png")} alt="clock"/>
                    <p>{data.time}</p>
                </div>

                <div className="titleArea">
                    <span>{data.category}</span>
                </div>
            </div>


            <div className="activityBody">
                <div><img src={data.imageSrc}/></div>
                <div className="activityDescription">
                    <div className='desc'>
                        <p>{data.description}</p>
                    </div>
                    <button className="dectMoreBtn">More</button>
                </div>
            </div>
        </div>
    )
}

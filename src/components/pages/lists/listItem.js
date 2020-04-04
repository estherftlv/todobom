import React, { useState, useCallback } from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import { ActivityInList } from './activityInList'


export const ListItem = ({data, openMenuFunc}) => {

    const lists = [45 , 120 , 245];
    const max = Math.max(...lists);
    //const min = Math.min(...lists);
    const [progress, setProgress] = useState(120);
    const one = max / 100;

    // Menu


    // List property

    const listPosition = lists.map(lists =>({pos : lists / one, value: lists }));


    const updateSum = useCallback(() => {
      let initialValue = 0;
      let sum = 0;
      if(data.assignedActs){

          sum = data.assignedActs.reduce((accumulator, currentValue)=> {
          return accumulator + currentValue.time;
        }, initialValue);
      }
      return sum;

  	}, [data]);

    return (
        <div className="listItem">
            <header>
                <div className="headerAndMore">
                    <h2>{data.title}</h2>
                    {/* Pass listID to openMenuFunc as parameter*/}
                    <div onClick={e => openMenuFunc(e)}/>
                </div>

                <div className="prograss">
                {listPosition.map((item,i)=>
                    <span key={item.pos} className={progress >= item.value ? 'green' : ''} style={{left:`${item.pos}%`}}>
                        <Present style={{left: `${i === listPosition.length - 1 ? '-30px' : '-17px'}`}}/>
                    </span>)
                }
                    <div className="fill" style={{width:`${progress / one }%`}}/>
                </div>


                <div className="feedBack">
                    <div className="checkBoxArea">
                        <input type="checkbox" className="checkBox"/>
                        <img src={require("./images/time-gray.png")} alt="clock"/>
                        <p>{updateSum()}</p>
                    </div>

                    <div className="titleArea">
                        <span className="howWasIt">How was it?</span>
                        <img className="recommend" src={require('./images/recommend.png')} alt="thumbs up"/>
                        <img className="unRecommend" src={require('./images/un-recommend.png')} alt="thumbs down"/>
                    </div>
                </div>
                {
                  (data.assignedActs) &&  data.assignedActs.map(act=><ActivityInList data={act} key={act.id}/>)
                }

            </header>


        </div>
    )
}

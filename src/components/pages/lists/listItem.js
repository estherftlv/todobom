import React, { useState, useCallback ,useEffect} from 'react'
import './listItem.scss'
import { ReactComponent as Present } from '../../common/sideNav/present.svg'
import { ActivityInList } from './activityInList'
import { CATEGORIES } from '../../../utils/enums'; 


export const ListItem = ({data, openMenuFunc, updateListProgress, showActivity}) => {

    const lists = [45 , 120 , 245];
    const max = Math.max(...lists);
    //const min = Math.min(...lists);
    const [progress, setProgress] = useState(0);
    const one = max / 100;
    const [missionData , setMissionData] = useState(null);

    useEffect(() => {
        if(data.assignedActs){
            setMissionData(data.assignedActs);
        }
    },[data])

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

    const markAsDone = (actId) =>{
        let progerss = 0;
        console.log('ssssss')
            const newMissionData = missionData.map((act=> {
                if(act.id === actId){
                    act.completed = true;
                }
                if(act.completed){
                    progerss += act.time;
                }
                return act;
            }))
            setMissionData(newMissionData);
            setProgress(progerss);
            updateListProgress(missionData);
    }


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
                    <span key={i} className={progress >= item.value ? 'green' : ''} style={{left:`${item.pos}%`}}>
                        <Present style={{left: `${i === listPosition.length - 1 ? '-30px' : '-17px'}`}}/>
                    </span>)
                }
                    <div className="fill" style={{width:`${progress / one }%`}}/>
                </div>


                <div className="feedBack">
                        <span>{progress}</span><span> / {max}</span>
                </div>
                {
                    missionData &&  missionData.map((act,i)=>{
                        const {category} = act;
                        const categoryData = category && CATEGORIES[category.toLowerCase()]!==undefined? CATEGORIES[category.toLowerCase()]: CATEGORIES["none"];

                        if (act.description || act.title){
                            
                            if(!act.completed){
                                return  <ActivityInList showActivity={showActivity} markAsDone={markAsDone} category={categoryData} data={act} key={i}/>
                            }else{
                                return (
                                    <div className="titleArea" key={i} style={{backgroundColor:categoryData.color, color:'#fff'}}>
                                        <span className="howWasIt">How was it? - {categoryData.text}</span>
                                        <img className="recommend" src={require('./images/recommend.png')} alt="thumbs up"/>
                                        <img className="unRecommend" src={require('./images/un-recommend.png')} alt="thumbs down"/>
                                    </div>
                                )
                            }                   
                        };
                    })
                }

            </header>


        </div>
    )
}

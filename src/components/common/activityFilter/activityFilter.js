import React, {useState} from 'react'
import './activityFilter.scss'
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { CATEGORIES } from '../../../utils/enums';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
const Range = Slider.Range;

export default function ActivityFilter({addFilter}) {
    const [openFilter , setOpenFilter] = useState(true);
    const [duration , setDuration] = useState([15,45]);
    const [age , setAge] = useState([3,15]);

    const onDurationSliderChange = (value) =>{
        addFilter('time',value)
    }

    const onAgeChange = (value) =>{
        addFilter('age',value)
    }

    return (
        <div className={`filterContainer ${openFilter ? 'open' : ''}`}>
            <div className="heandle" onClick={()=>setOpenFilter(!openFilter)}>
                <span>
                    <FaChevronLeft className={`faArrow ${openFilter ? 'open' : ''}`}/>
                </span>
            </div>

            <main className="filters">
                <h3>FILTER ACTIVITIES</h3>
                <h6>Categories</h6>
                {Object.keys(CATEGORIES).map(key =>{
                    if(key !== 'none'){
                        const cat = CATEGORIES[key];
                        return <label className="filterCat" key={key} style={{backgroundColor: `${cat.color}`}}>
                                    {cat.text}
                                    <input type="checkbox" value={key} onChange={()=>addFilter('category', key)}/>
                                    <FaCheck className="checkboxV" />
                                </label>
                    }
                }
                )}

                <h6>Activity duration (estimated)</h6>
                <div className="rangeInput" afterMin="0" afterMax="60+">
                    <div className="rangeStyle" afterMin={`${duration[0]} - `} afterMax={duration[1] > 60 ? '60+' : duration[1]}> 
                        <Range className="duration" min={0} max={61} defaultValue={[15,45]} onChange={onDurationSliderChange }/>
                    </div>
                </div>
                <br/>
                <h6>Suitable for ages</h6>
                <div className="ageRange" afterMin="0" afterMax="25">
                    <div className="rangeStyle" afterMin={`${age[0]} - `} afterMax={age[1] > 60 ? '60+' : age[1]}> 
                        <Range className="duration" min={0} max={61} defaultValue={[3,15]} onChange={onAgeChange }/>
                    </div>
                </div>

            </main>
        </div>
    )
}

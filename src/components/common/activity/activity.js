import React from 'react';
import cls from './activity.module.scss';
import { FaPlus } from 'react-icons/fa';
import { CATEGORIES } from '../../../utils/enums';

export default function Activity({plusClick = null, activity}) {

    const [offset , setOffset] = React.useState(1000);
    const imageSrc= activity.imageSrc || 'https://loremflickr.com/320/240' , 
        description= activity.description || "description placeholder", 
        colorActivity= CATEGORIES[activity.category.toLowerCase()].color || "pink",
        time = activity.time;

    React.useEffect(() => {
        setTimeout(()=>{
            const newOffset = time >60 ? 0 : 1000 - (time * 1255 / 100);
            setOffset(newOffset);
        })
    }, [])

    const openMore = () => {console.log('more clicked')}

    const addActivityToList = (e) => {
        const pos = {
            x: e.clientX,
            y : e.clientY
        }
        plusClick && plusClick(pos);
    }

    return (
        <div className={cls.activityBox}>
            <div className={cls.time} onClick={addActivityToList}>
                    <span>{time > 60 ? '60+' : time} min</span> 
                    <span><FaPlus/></span>
            </div>
            <svg className={cls.svgTime} width='250' height='250' viewBox='-10 -10 250 250'>
                <circle cx="115" cy="115" r="120px" strokeDashoffset={`${offset}`}/>
            </svg>
            <div className={cls.details}>
                <div className={cls.imagePlaceholder} style={{backgroundImage:`url(${imageSrc})`}}/>
                <div className={cls.description} style={{backgroundColor:`${colorActivity}`}}>{description}</div>
                <div className={cls.more} onClick={openMore}>more</div>
            </div>

        </div>
    )
}

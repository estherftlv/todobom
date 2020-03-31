import React from 'react';
import cls from './activity.module.scss';
import { FaPlus } from 'react-icons/fa';

export default function Activity({time = 0 , imageSrc= 'https://loremflickr.com/320/240' , description="description placeholder", colorActivity="pink"}) {

    const [offset , setOffset] = React.useState(1000);

    React.useEffect(() => {
        setTimeout(()=>{
            const newOffset = time >60 ? 0 : 1000 - (time * 1255 / 100);
            setOffset(newOffset);
        })
    }, [time])

    const openMore = () => {console.log('more clicked')}

    const addActivityToList = () => {
        console.log('addActivityToList')
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

import React, {useState, useEffect} from 'react';
import HotBar from '../HotBar/HotBar'
import CrossHotBar from '../CrossHotBar/CrossHotBar'

import styles from './HotBarMaker.module.css'


const HotBarMaker = ({role}) => {
    const initialRole = role;
    const [hotBarStyle, setHotBarStyle] = useState<string>("hb")
    
    const handleClick = (e) => {
        e.preventDefault();
        setHotBarStyle(e.target.value);
        console.log(hotBarStyle)
    }

    const HotBarSwitcher = () => {
        
    if(hotBarStyle == "hb"){
        return (
            <HotBar role={role} />
        );
    } else if (hotBarStyle == "chb") {
        return (
            <CrossHotBar role={role} />
        );
    } else {
        return null;
    }
    }

    return (
        <>
            
            <div className={styles.slantBtnContainer}>
                <button value={"hb"} onClick={e => handleClick(e)} className={`${styles.slantBtn} ${hotBarStyle =="hb" ? `${styles.active}` : ""}`}>
                    <div>Hotbar</div>
                </button>
                <button value={"chb"} onClick={e => handleClick(e)} className={`${styles.slantBtn} ${hotBarStyle =="chb" ? `${styles.active}` : ""}`}>
                    <div>Cross Hotbar</div>
                </button>
            </div>


            <HotBarSwitcher />
        </>
    )
    
};

export default HotBarMaker;
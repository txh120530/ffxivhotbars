import React, {useState} from 'react';

import {useDrag, useDrop} from 'react-dnd';
import Select from 'react-select'


import HotBarSlot from '../HotBarSlot/HotBarSlot';
import ControllerGroup from './ControllerGroup'


import {chotbar} from '../../data/hotbars'
import styles from './CrossHotBar.module.css'


const Row = ({slots, index, role}) => {

  const rowIndex = index;
  console.log("Row index: ", rowIndex)

  const controllerGroups = {
    left: slots.slice(0, 8),
    right: slots.slice(8, slots.length + 1)
  };


  return (
    <>
        <div className={`${styles.rowInfo} flex justify-between`}>
          <span>{rowIndex+1}</span>


          </div>

    <ol  className={styles.row}>
      {Object.keys(controllerGroups).map((slots, index) => (
        <div className={`${styles.controllerSlots} ${slots}`} key={`group-${index}`}>
          <ControllerGroup 
            slots={controllerGroups[slots]}
            id={slots[index].id}
            groupIndex={index}
            rowIndex={rowIndex}
            role={role}
            modifier={null} index={undefined}          />
        </div>
      ))}
    </ol>
    </>
);
}

const CrossHotBar = ({role}) => {




  
    return (
        <ol className={styles['row-container']}>
        {Object.keys(chotbar).map((barKey, index) => (
          <>
          <li key={barKey}  className={styles.rowBlock}>
            
            <Row slots={chotbar[barKey]} index={index} role={role}/>
          </li>
          </>
        ))}
      </ol>
    );
};

export default CrossHotBar;
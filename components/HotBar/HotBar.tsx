import React, {useState} from 'react';

import {useDrag, useDrop} from 'react-dnd';
import Select from 'react-select'


import HotBarSlot from '../HotBarSlot/HotBarSlot';


import {hotbar} from '../../data/hotbars'
import styles from './Hotbar.module.css'

const modifierOptions = [
  {value: '', label: 'No Modifier'},
  {value: 'C', label: 'CTRL'},
  {value: 'A', label: 'ALT'},
  {value: '+', label: 'SHIFT'}
]

const Row = ({slots, index, role}) => {
  const [modifier, setModifier] = useState<{ value: string, label: string} | null>(null)

  const rowIndex = index;
  const handleModifierChange = (e: { value: string, label: string}) => {
    setModifier(e);
  }

  


  return (
    <>
        <div className={`${styles.rowInfo} flex justify-between`}>
          <span>{index+1}</span>

          <Select 
            id={`modifier-select-${index}`} instanceId={`modifier-select-${index}`}
            options={modifierOptions} 
            className="w-5/12" 
            classNamePrefix="react-select"
            onChange={e => {handleModifierChange(e)}}
              />

          </div>

    <ol  className={styles.row}>
      {Object.keys(slots).map((slot, index) => ( 
        <li className={styles.slot} key={`slot-${slots[slot]}-${index}`}>
          <HotBarSlot
            id={slots[slot].id}
            index={index}
            modifier={modifier}
            role={role}
            keyboardSlot={true}
            storageID={`hb-${role.Abbr}-${rowIndex}-${index}`}         />      
        </li>
      ))}
    </ol>
    </>
);
}

const HotBar = ({role}) => {




  
    return (
        <ol className={styles['row-container']}>
        {Object.keys(hotbar).map((barKey, index) => (
          <li key={`${barKey}-${index}`}  className={styles.rowBlock}>
            
            <Row slots={hotbar[barKey]} index={index} role={role}/>
          </li>
        ))}
      </ol>
    );
};

export default HotBar;
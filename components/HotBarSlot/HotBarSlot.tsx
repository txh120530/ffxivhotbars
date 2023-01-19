import React, {useState, useEffect} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import Action from '../Action/Action'

import { ItemTypes } from '../ItemTypes'
import styles from './HotbarSlot.module.css'



const HotBarSlot = ({id, rowIndex, index, modifier, storageID, role}) => {
  const [actionChild, setActionChild] = useState(null);
  const indexNum = {
    "0": "1",
    "1": "2",
    "2": "3",
    "3": "4",
    "4": "5",
    "5": "6",
    "6": "7",
    "7": "8",
    "8": "9",
    "9": "0",
    "10": "-",
    "11": "=",
  }
  const initialState = {};
  const slotName = storageID;


  const removeAction = () => {
    setActionChild(null);
    localStorage.removeItem(storageID)

  }


  const addAction = (item, action) => {
    const filledAction = <Action action={action} type={item.type} removeAction={removeAction} />
    setActionChild(filledAction);
  }


  
  useEffect(() => {
    setActionChild(null);
  }, [role]);
  
  useEffect(() => {
    if(!storageID.startsWith("unidentified")){

      const slotData = JSON.parse(localStorage.getItem(storageID));
      if (slotData) {
        const filledAction = <Action action={slotData.props.action} type={slotData.props.type} removeAction={removeAction} />
        setActionChild(filledAction);
      }
    }
  }, [storageID]);

  useEffect(() => {

    if (actionChild !== initialState) {
      if(actionChild == null){
      } else {
        localStorage.setItem(slotName, JSON.stringify(actionChild));  
      }
    }
  }, [actionChild]);




  const [{isOver}, drop] = useDrop(() => ({
    accept: [ItemTypes.ACTION, ItemTypes.HOTBARACTION],
    drop: (item) => addAction(item, item.action),
    collect: (monitor) =>({
      isOver: !!monitor.isOver(),
  })
  }))

  const HotBarNum = ({modifier, index}) => {
    var modifierText = "";
    if(modifier !== null){
        modifierText = modifierText + modifier.value;
    } else {
      return null;
    }

    return (
      <span className={styles.hotbarNum}>{modifierText+indexNum[index]}</span>
    )
  }






  const [{isDragging}, drag] = useDrag({
    type: "actionButton",
    item: {},
    collect: (monitor) =>({
        isDragging: monitor.isDragging(),
    })
  })



    return (
          <div
            id={id}
            className="slot-square"
            role="button"
            tabIndex={12}
            ref={drop}
          >
            {actionChild}
            <HotBarNum modifier={modifier} index={index} />
          </div>
      );
    }

export default HotBarSlot;
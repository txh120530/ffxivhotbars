import React, {useState, useEffect} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import Action from '../Action/Action'

import { ItemTypes } from '../ItemTypes'
import styles from './HotbarSlot.module.css'



const HotBarSlot = ({id, index, modifier, storageID, role, keyboardSlot}) => {
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
  


  const addAction = (item: {type: string, action: string}, action: { ID: string; Icon: string; Name: string; Abbr: string; }) => {
    const filledAction = <Action action={action} type={item.type} removeAction={removeAction} itemType={''} />
    setActionChild(filledAction);
  }


  
  useEffect(() => {
    setActionChild(null);
  }, [role]);
  
  useEffect(() => {
    if(!storageID.startsWith("unidentified")){

      const slotData = JSON.parse(localStorage.getItem(storageID));
      if (slotData) {
        const filledAction = <Action action={slotData.props.action} type={slotData.props.type} removeAction={removeAction} itemType={''} />
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
    drop: (item: {type: string, action: any}) => addAction(item, item.action),
    collect: (monitor) =>({
      isOver: !!monitor.isOver(),
  })
  }))

  const HotBarNum = ({modifier, index, keyboardSlot}) => {
    if(!keyboardSlot){
      return null;
    }
    var modifierText = "";
    if(modifier){
        modifierText = modifierText + modifier.value;
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
            <HotBarNum modifier={modifier} index={index} keyboardSlot={keyboardSlot} />
          </div>
      );
    }

export default HotBarSlot;
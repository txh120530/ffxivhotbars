import React, {useState, useEffect} from 'react';
import Tooltip from "../Tooltip"
import {useDrag} from 'react-dnd'

import {fetchSingleAction} from '../../data/fetchActions'
import { ItemTypes } from '../ItemTypes'


import parse from 'html-react-parser';
import styles from './Action.module.css'

interface Props {
    action: {ID: string, Icon: string, Name: string, Abbr: string},
    type: string,
    removeAction: any
    itemType: string
}


const Action= ({action, type, removeAction}:Props) => {
    const [actionInfo, setActionInfo] = useState({});
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.ACTION,
        item: {ID: action.ID, type: type, action: action},
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
        })
    })





    const getActionInfo = (action, type) => {
        if (action) {
            let results = fetchSingleAction(action, type);
            return results;
        }
    }



    const toolTipContent = (actionInfo) => {
        const regexForStripHTML = /<UIGlow>(.*?)<\/UIGlow>|<UIForeground>(.*?)<\/UIForeground>/g;
        return(
            <div>
                
                {actionInfo.Name ? <b className="mr-2">{parse(actionInfo.Name)}</b> : null}
                <hr />
                {actionInfo.Description ? <p className="mt-2">{parse((actionInfo.Description).replace(regexForStripHTML, ''))}</p> : null}

            </div>
        )
    
    }

    const handleMouseOver = () => {
        getActionInfo(action, type).then((results) =>{
            setActionInfo(results);
        });   
    }


    return (
        <div>

            <button 
            ref={drag} 
            className = {styles.action}
            style={{opacity: isDragging ? ".5" : "1"}} 
            key={action.ID} 
            onDrag={removeAction} 
            onMouseOver={handleMouseOver}>
                <Tooltip text={toolTipContent(actionInfo)} bg={null} delay=".5">
                <img 
                    src={`https://xivapi.com/${action.Icon}`}
                />
                </Tooltip>
            </button>
        </div>
    );
};

export default Action;
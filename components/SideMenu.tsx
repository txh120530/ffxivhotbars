import React, {useState} from 'react';
import Tabs from "./Tabs"
import Action from "./Action/Action"

import { ItemTypes } from './ItemTypes'


const SideMenu = ({jobActions, generalActions}) => {

    return (
    <Tabs>
        <div label="Job Actions" preopenTab="1">
        {jobActions.map(function(jobAction, i){
            return (
                <Action action={jobAction} type="Action" />
            )
        })}
        </div>

        <div label="General Actions">
        {generalActions.map(function(generalAction, i){
            if(generalAction.Name){
                return (
                    <Action action={generalAction} type="GeneralAction" itemType={ItemTypes.ACTION} />
                )
            }
        })}
        </div>

    </Tabs>
    );
};

export default SideMenu;
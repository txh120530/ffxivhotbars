import React, {useState} from 'react';
import Tabs from "./Tabs"
import Action from "./Action/Action"

import { ItemTypes } from './ItemTypes'


const SideMenu = ({jobActions, generalActions}) => {

    return (
    <Tabs>
        <div data-label="Job Actions">
        {jobActions.map(function(jobAction, i){
            return (
                <Action action={jobAction} key={`job-action-${i}`} type="Action" removeAction={undefined} itemType={''} />
            )
        })}
        </div>

        <div data-label="General Actions">
        {generalActions.map(function(generalAction, i){
            if(generalAction.Name){
                return (
                    <Action action={generalAction} key={`general-action-${i}`} type="GeneralAction" itemType={ItemTypes.ACTION} removeAction={undefined} />
                )
            }
        })}
        </div>

    </Tabs>
    );
};

export default SideMenu;
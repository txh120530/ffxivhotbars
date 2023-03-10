// @ts-nocheck
import React, {useState} from 'react';
import Tabs from "./Tabs"
import Action from "./Action/Action"
import RoleSelected from './RoleSelected';

import { ItemTypes } from './ItemTypes'

import styles from './SideMenu.module.css'


const SideMenu = ({role, jobActions, generalActions}) => {

    return (
        <div  className={`${styles.tabs} window-shadow`}>
        <h2>{role ? <RoleSelected role={role} /> : "No Job Selected"}</h2>

    <Tabs>
        
        <div label="Job Actions">
        {jobActions.map(function(jobAction, i){
            return (
                <Action action={jobAction} key={`job-action-${i}`} type="Action" removeAction={undefined} itemType={''} />
            )
        })}
        </div>

        <div label="General Actions">
        {generalActions.map(function(generalAction, i){
            if(generalAction.Name){
                return (
                    <Action action={generalAction} key={`general-action-${i}`} type="GeneralAction" itemType={ItemTypes.ACTION} removeAction={undefined} />
                )
            }
        })}
        </div>

    </Tabs>
    </div>
    );
};

export default SideMenu;
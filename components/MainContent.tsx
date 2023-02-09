import React, {useState, useEffect} from 'react';

import {fetchJobActions, fetchGeneralActions} from '../data/fetchActions'
import SideMenu from './SideMenu'
import HotBarMaker from './HotBarMaker/HotBarMaker'

import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


const MainContent = ({role}) => {
    const [jobActions, setJobActions] = useState([]);
    const [generalActions, setGeneralActions] = useState([]);

    const getJobActions = (role) => {
        if (role) {
            let results = fetchJobActions(role);
            return results;
        }
    }

    const getGeneralActions = () => {
        let generalActions = fetchGeneralActions();
            return generalActions;
    }


    
    useEffect(() => {
        getJobActions(role).then((results) =>{
            setJobActions(results);
        });    

        getGeneralActions().then((results) =>{
            setGeneralActions(results);
        });    
      }, [role])

    return (
        <>
        <DndProvider backend={HTML5Backend}>
        <section className="block lg:flex justify-between relative">
            <div className="w-full lg:w-3/12 lg:mr-4 md:sticky top-0 left-0 self-start z-50 bg-tan">
            <SideMenu role={role} jobActions={jobActions} generalActions={generalActions} />
            </div>
            <div className="window-shadow w-full lg:w-8/12">
            <HotBarMaker role={role} />
            </div>
        </section>
        </DndProvider>
        </>
    );
};



export default MainContent;
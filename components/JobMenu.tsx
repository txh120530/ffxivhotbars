import {useState} from 'react'

import JobsList from './JobList';

import styles from './JobMenu.module.css';


import React from 'react';

const JobMenu = ({jobs}) => {
    const [filterType, setFilterType] = useState<string>("discipline");

    const handleChange = (e) => {
        setFilterType(e.target.value);
    }


    const DoW = jobs.filter((job) => job.Discipline === 'DOW');
    const DoM = jobs.filter((job) => job.Discipline === 'DOM');
    const DoH = jobs.filter((job) => job.Discipline === 'DOH');
    const DoL = jobs.filter((job) => job.Discipline === 'DOL');

    const Mdps = jobs.filter((job) => job.Role === 'MDPS');
    const Heal = jobs.filter((job) => job.Role === 'HEAL');
    const Rdps = jobs.filter((job) => job.Role === 'RDPS');
    const Tank = jobs.filter((job) => job.Role === 'TANK');
    const Pdps = jobs.filter((job) => job.Role === 'PDPS');


    const List = () => {
        if(filterType == 'discipline'){
            return(
            <ul className="flex p-6 flex-wrap" aria-labelledby="jobSelectTitle">
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoW" jobs={DoW} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoM" jobs={DoM} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoH" jobs={DoH} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoL" jobs={DoL} />
                </li>
            </ul>
            )
        }

        if(filterType == 'role'){
            return(
            <ul className="flex p-6 flex-wrap" aria-labelledby="jobSelectTitle">
                
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="TANK" jobs={Tank} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="HEAL" jobs={Heal} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="MDPS" jobs={Mdps} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="RDPS" jobs={Rdps} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="PDPS" jobs={Pdps} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoH" jobs={DoH} />
                </li>
                <li className="w-full md:w-1/4 pr-1">
                <JobsList title="DoL" jobs={DoL} />
                </li>
            </ul>
            )
        }
    }

    return (
        <div className="window-shadow">

      <div className={styles.slantBtnContainer}>
                <button value={"discipline"} onClick={e => handleChange(e)} className={`${styles.slantBtn} ${filterType =="discipline" ? `${styles.active}` : ""}`}>
                    <div>Sort by Discipline</div>
                </button>
                <button value={"role"} onClick={e => handleChange(e)} className={`${styles.slantBtn} ${filterType =="role" ? `${styles.active}` : ""}`}>
                    <div>Sort by Role</div>
                </button>
            </div>
        <List />

        </div>
    );
};

  

export default JobMenu;
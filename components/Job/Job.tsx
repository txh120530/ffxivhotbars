import React from 'react';
import { useRole } from "../../store/RoleContext";

import styles from './Job.module.css'


function Job({job}) {
    const {role} = useRole();


    return (
        <span className={`flex items-center p-1 w-full ${styles.job} ${role.ID == job.ID ? styles.selected : null}`}>
            <img 
                src={job.Icon}
                width="40px"
            />
            <b className="mx-1">{job.Abbr}</b>
            <span>{job.Name}</span>
        </span>
    );
}

export default Job;
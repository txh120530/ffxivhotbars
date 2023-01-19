import React, {useState} from 'react';

import styles from './Tabs.module.css'


const Tab = ({activeTab, label, onClick}) => {
    

    const handleClick = () => {
        onClick(label);
      };

      let className = "tab-list-item switch-tab";

      if (activeTab === label) {
        className += " tab-list-active";
      }

      return (
        <li className={className} onClick={handleClick}>
          {label}
        </li>
      );
};

export default Tab;
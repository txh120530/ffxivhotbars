import React, {DetailedHTMLProps, HTMLAttributes, ReactNode, useState} from 'react';

import styles from './Tabs.module.css'

type TabProps = {
  activeTab: any;
  label: ReactNode;
  onClick: Function;
}

const Tab = ({activeTab, label, onClick}:TabProps) => {
    

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
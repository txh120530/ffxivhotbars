import React, {useState} from 'react';

import Tab from './Tab';
import styles from './Tabs.module.css'

type TabsProps = {
  children: any;
  label: any;

}

const Tabs = ({children}: TabsProps) => {
    const [activeTab, setActiveTab] = useState();

    const handleClick = (tab) => {
        setActiveTab(tab);
    }


    return (
        <div className={`${styles.tabs} window-shadow`}>
        <ol className="tab-list switch-container">
          {children.map((child) => {
            const { label, preopenTab } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={handleClick}
              />
            );
          })}
        </ol>
        <div className={styles['tab-content']}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
};

export default Tabs;
import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = React.Children.toArray(children);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${index === activeTab ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab]}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.TabPane = TabPane;

export default Tabs;
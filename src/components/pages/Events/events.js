import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from '../../Sidebar';
import './events.css';
// import EventTab from './Photography/EventTab';
// import Drawer from '../../Drawer';
function Events() {
  return (
    <div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="showOnMobile">
        <MobileLayout />
      </div>
    </div>
  );
}

export default Events;

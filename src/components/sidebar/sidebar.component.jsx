import React from 'react';

import './sidebar.styles.css';
import SidebarStaffController from './sidebar-staff-controller.component';

const Sidebar = () => {
    return(

        <div>
            <h2 align="center">Sidebar</h2>
            <h3 align="center">Staff Section</h3>
            <SidebarStaffController/>
        </div>
    )
}
export default Sidebar;
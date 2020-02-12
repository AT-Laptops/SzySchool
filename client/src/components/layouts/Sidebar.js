import React, {Fragment, useState} from 'react';
import './../../App.css';
import SidebarElement from './../containers/SidebarElement';

const Sidebar = () => {

    return (
        <nav className="navbar">
            <SidebarElement></SidebarElement>
            <SidebarElement></SidebarElement>
            <SidebarElement></SidebarElement>
            <SidebarElement></SidebarElement>
        </nav>
    );
}

export default Sidebar;
import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';

class Sidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul className="nav flex-column">
                        <SidebarItem path='/' label='Home' />
                        <SidebarItem path='/trending' label='Trending' />
                        <SidebarItem path='/videos' label='Videos' />
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default Sidebar;
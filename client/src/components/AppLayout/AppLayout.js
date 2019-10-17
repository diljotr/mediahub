import React from 'react';
import './AppLayout.css';
import HeaderNav from "../../containers/HeaderNav/HeaderNav";
import Sidebar from "../../containers/Sidebar/Sidebar";
//import HeaderNav from '../../containers/HeaderNav/HeaderNav';
//import ScrollToTop from '../ScrollToTop/ScrollToTop';

export function AppLayout(props) {
    return (
        <div className='App container'>
            <div className="row">
                <HeaderNav/>
            </div>
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
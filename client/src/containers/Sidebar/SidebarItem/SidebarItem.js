import React from 'react';
import {Link, withRouter} from 'react-router-dom';

export class SidebarItem extends React.Component {
    render() {
        return (
            <Link to={{pathname: this.props.path}}>
                <li className="nav-item">
                    <a className="nav-link active" href="#">{this.props.label}</a>
                </li>
            </Link>
        );
    }
}

export default withRouter(SidebarItem);
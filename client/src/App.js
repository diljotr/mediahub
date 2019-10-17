import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Trending from './containers/Trending/Trending';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';
import Videos from "./containers/Videos/Videos";

class App extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path="/video/:id" component={Trending}/>
                    <Route path="/videos" component={Videos}/>
                    <Route path="/trending" component={Trending}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </AppLayout>
        );
    }
}

export default App;

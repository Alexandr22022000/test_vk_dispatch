import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './containers/Login';
import Content from './containers/Content';
import Toolbar from './containers/Toolbar';
import SendingMessages from './containers/SendingMessages';
import Callback from './containers/Callback';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/callback" component={Callback}/>
                <Toolbar>
                    <Route path="/sending" component={SendingMessages}/>
                    <Route path="/friends" component={Content}/>
                </Toolbar>
            </Switch>
        </div>
    );
  }
}

export default App;

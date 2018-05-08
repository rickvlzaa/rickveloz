import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Home from './scenes/Home';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <Content>
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default hot(module)(App);
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './scenes/Home';
import About from './scenes/About'
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <Sidebar />
                <Content>
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />}/>
                        <Route path="/about" render={props => <About {...props} />}/>
                    </Switch>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default hot(module)(App);
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Offer from './components/pages/Offer';

import './styles.css';

class App extends React.Component {
    render() {
        return (
            <>
                <Header /> 
                
                <div className="main-container">
                    <Tabs />

                    <div className="container">
                        <Router basename={process.env.PUBLIC_URL}>
                            <Switch>
                                <Route path="/offer/:id" component={Offer} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import main from "./contents/main/main";
import content from "./contents/content/content";
import about from "./contents/about/about";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


const App = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12'>
                        <Header/>
                    </div>
                </div>

                <div className='row'>
                    <Router history={createBrowserHistory()}>
                        <div className='col-xl-2 col-lg-2 col-sm-12 col-md-12 col-12'
                             style={{marginTop: '10px'}}>
                            <Navigation/>
                        </div>
                        <div className='col-xl-10 col-lg-10 col-sm-12 col-md-12 col-12'>

                            <Switch>
                                <Route path='/react-redux/' exact component={main}/>
                                <Route path='/react-redux/data' exact component={content}/>
                                <Route path='/react-redux/about' exact component={about}/>
                            </Switch>

                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
};

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
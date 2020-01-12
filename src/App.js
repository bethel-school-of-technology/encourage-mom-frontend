import React, { Fragment } from 'react';
// import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import home from './components/pages/home';
import Alert from './components/layout/Alert';
import encouragment from './components/pages/weekly-encouragement';
import posts from './components/pages/posts';
import contact from './components/pages/contact';

//redux
import { Provider } from 'react-redux';
import store from './store';


import './App.css';

const App = () => (

<Provider store={store}>

<Router>
  <Fragment>
      <Navbar/>
      <Landing />
      <section className="container1">
      <Route exact path="/home" component={home} />
      <Route exact path="/encouragement" component={encouragment} />
      <Route exact path="/posts" component={posts} />
      <Route exact path="/contact" component={contact} />
      </section>
      <section className="container2">
      <Alert />
      <Switch>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          {/* <Route exact path="/logout" component={Logout} /> */}
        </Switch>
      </section>
  </Fragment>
</Router>
</Provider>
) ;



export default App;

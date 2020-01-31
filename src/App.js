import React, { Fragment, useEffect } from 'react';

// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
// import Logout from './components/auth/Logout'

import home from './components/pages/home';
// <<<<<<< vinces-branch
// import encouragement from './components/pages/weekly-encouragement';
// import posts from './components/pages/posts';
// =======
import encouragment from './components/pages/weekly-encouragement';
import posts from './components/pages/posts'
import contact from './components/pages/contact';

import CreateProfile from './components/profile/create-profile';
import EditProfile from './components/profile/edit-profile';
import {ProfileList} from './components/profile/profiles';
import Profile from './components/profile/profile';

import postForm from './components/posts/postForm';
import EditPost from './components/posts/edit.post';
// import PostFeed from './components/posts/post-feed';
import PostList from './components/posts/post-feed'

import { loadUser } from './actions/auth';

import setAuthToken from './utils/setAuthToken';

//redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);
return(
<Provider store={store}>

<Router>
  <Fragment>
      <Navbar/>
      <Landing />
      <section className="container1">
      <Route exact path="/" component={home} />
      <Route exact path="/encouragement" component={encouragment} />
      <Route exact path="/posts" component={posts} />
      <Route exact path="/contact" component={contact} />
      </section>
      <section className="container2">
      <Alert />
      <Switch>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </section>
      <section className="container3">
        <Switch>
        <Route exact path="/create-post" component={postForm}></Route>
        {/* <Route exact patch='/posts' component={PostList}/> */}
        </Switch>
      </section>
      <section className="container4">
        <Switch>
          <Route exact path='/create-profile' component={CreateProfile} /> 
           <Route exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/profiles' component={ProfileList} />
        </Switch>
      </section>
  </Fragment>
</Router>
</Provider>
)} ;

export default App;

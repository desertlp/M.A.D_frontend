import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// Static 
import Home from '../pages/Home/Home';
import ReelContainer from '../pages/Reel/ReelContainer';
import Contact from '../pages/Contact/Contact';
import Bio from '../pages/Bio/Bio';

// Edit Profile
import Profile from '../pages/Profile/Profile';

// Videos
import VideoContainer from '../pages/Videos/VideoContainer/VideoContainer';
import NewVideoContainer from '../pages/Videos/NewVideoContainer/NewVideoContainer';
import EditVideoContainer from '../pages/Videos/EditVideoContainer/EditVideoContainer';
import DeleteVideoContainer from '../pages/Videos/DeleteVideoContainer/DeleteVideoContainer';
import VideoIndex from '../pages/Videos/VideoIndex';

// Authorization 
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';


export default ({ currentUser, setCurrentUser }) => (
  
  <Switch>
    
    <Route exact path='/' component={Home} />
    <Route path='/reel'component={ReelContainer}/>
    <Route path='/bio'component={Bio}/>
    <Route path='/contact'component={Contact}/>
    
    <Route path='/profile'component={Profile}/>

    <Route exact path='/video' component={VideoIndex} />
    <Route exact path='/video/new' render={() => currentUser ? <NewVideoContainer /> : <Redirect to='/login' /> }/>
    <Route exact path='/video/:id' component={VideoContainer} />
    <Route path='/video/:id/edit' component={EditVideoContainer} />
    <Route path='/video/:id/delete' component={DeleteVideoContainer} />
   


    <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} />
  </Switch>
  
);




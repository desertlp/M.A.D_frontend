import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Static 
import Home from '../pages/Home/Home';
// About 

// Videos
import VideoListContainer from '../pages/Videos/VideoListContainer/VideoListContainer';
import VideoContainer from '../pages/Videos/VideoContainer/VideoContainer';
import NewVideoContainer from '../pages/Videos/NewVideoContainer/NewVideoContainer';

// BTS Photo Gallery 
import BTSListContainer from '../pages/BTS/BTSListContainer/BTSListContainer';
import BTSContainer from '../pages/BTS/BTSContainer/BTSContainer';
import NewBTSContainer from '../pages/BTS/NewBTSContainer/NewBTSContainer';

// Authorization 
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';






export default ({ currentUser, setCurrentUser }) => (
// export default ({setCurrentUser }) => (
  
  <Switch>
    
    <Route exact path='/' component={Home} />
    
    <Route path='/video/new' render={() => currentUser ? <NewVideoContainer /> : <Redirect to='/login' /> }/>
    <Route path='/video/:id' component={VideoContainer} />
    <Route path='/video' component={VideoListContainer} />
    
    <Route path='/bts/new' render={() => currentUser ? <NewBTSContainer /> : <Redirect to='/login' /> }/>
    <Route path='/bts/:id' component={BTSContainer} />
    <Route path='/bts' component={BTSListContainer} />

    <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} />
  </Switch>
  
);




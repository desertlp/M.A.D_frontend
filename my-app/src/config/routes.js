import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// Static 
import Home from '../pages/Home/Home';
import ReelContainer from '../pages/Reel/ReelContainer';
import Contact from '../pages/Contact/Contact';
import Bio from '../pages/Bio/Bio';

// Edit Profile
import EditProfileContainer from '../pages/Profile/EditProfileContainer';

// Videos
import VideoListContainer from '../pages/Videos/VideoListContainer/VideoListContainer';
import VideoContainer from '../pages/Videos/VideoContainer/VideoContainer';
import NewVideoContainer from '../pages/Videos/NewVideoContainer/NewVideoContainer';
// Video Index Page
import VideoIndex from '../pages/Videos/VideoIndex';


// BTS Photo Gallery 
import BTSIndex from '../pages/BTS/BTSIndex';
import BTSContainer from '../pages/BTS/BTSContainer/BTSContainer';
import NewBTSContainer from '../pages/BTS/NewBTSContainer/NewBTSContainer';

// Authorization 
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';


export default ({ currentUser, setCurrentUser }) => (
// export default ({setCurrentUser }) => (
  
  <Switch>
    
    <Route exact path='/' component={Home} />
    
    <Route path='/reel'component={ReelContainer}/>
    {/* <Route path='user/user:id/reel' render={() => currentUser ? <ReelContainer /> : <Redirect to='/login' /> }/> */}

    <Route path='/bio'component={Bio}/>
    <Route path='/contact'component={Contact}/>
    
    <Route path='/video/new' render={() => currentUser ? <NewVideoContainer /> : <Redirect to='/login' /> }/>
    <Route path='/video/:id' component={VideoContainer} />
    {/* <Route path='/video' component={VideoListContainer} /> */}
    <Route path='/video' component={VideoIndex} />
    
    
    <Route path='/bts/new' render={() => currentUser ? <NewBTSContainer /> : <Redirect to='/login' /> }/>
    <Route path='/bts/:id' component={BTSContainer} />
    <Route path='/bts' component={BTSIndex} />

    {/* <Route path='/profile/:id/edit' component={ProfileContainer} /> */}

    <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} />
  </Switch>
  
);




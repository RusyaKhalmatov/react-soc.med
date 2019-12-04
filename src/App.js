import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Nav from './components/navbar/Nav';
import {BrowserRouter,Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
       
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path = '/users' render={() => <UsersContainer />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

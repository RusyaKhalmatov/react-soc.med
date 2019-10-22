import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from "./components/Dialogs/DialogsContainer";




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
       
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}  />} />
          <Route path='/profile' render={ () => <Profile store={props.store} />}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

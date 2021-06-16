import React, { createContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import HeroDetail from './pages/HeroDetail/HeroDetail';
import Login from './pages/Login/Login';
import SearchHero from './pages/SearchHero/SearchHero';
import Team from './pages/Team/Team';

// https://superheroapi.com/api/1132055343928952

function App() {

  const stateContext = createContext();

  return (
    <div className="App">
      <stateContext.Provider value={'ble'}>

        <BrowserRouter>
        
          <Header />

          <Switch>

            <Route exact path='/' component={Team} />

            <Route path='/login' component={Login} />

            <Route path='/search' component={SearchHero} />
            
            <Route path='/hero/:id' component={HeroDetail} />

          </Switch>

        </BrowserRouter>
        
      </stateContext.Provider>
    </div>
  );
}

export default App;

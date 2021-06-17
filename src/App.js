import React, {useState} from 'react';
import axios from 'axios';
import HeroesContext from './context/HeroesContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HeroDetail from './pages/HeroDetail/HeroDetail';
import Login from './pages/Login/Login';
import SearchHero from './pages/SearchHero/SearchHero';
import Team from './pages/Team/Team';

const heroesState = {
  allHeroes: [],
  myHeroes: [],
  viewHero: null,
}

function App() {

  const token = 1132055343928952;
  const urlToken = `https://superheroapi.com/api/${token}`;
  const proxy = 'https://rocky-basin-57618.herokuapp.com';

  const [userToken, setUserToken] = useState(false)
  const [heroesData, setHeroesData] = useState(heroesState)
  const [heroName, setHeroName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(email !== 'challenge@alkemy.org' || password !== 'react') {
      console.log('invalid email or password');
      return
    }

    axios.post(`http://challenge-react.alkemy.org/`,{
      email: 'challenge@alkemy.org',
      password: 'react'
    })
    .then(res => {
      console.log(res);
      window.localStorage.setItem('token', JSON.stringify(res.data.token))
      setUserToken(true)
    }).catch(error => console.log('ERROR:' + error))
  }

  const handleLogout = e => {
    setUserToken(false);
    window.localStorage.clear('token');
  }

  const handleName = (e) => {
    const name = e.target.value;
    setHeroName(name);
  }

  const handleSearchHero = () => {
    axios.get(`${proxy}/${urlToken}/search/${heroName}`)
    .then(res => {
        let heroes = heroesData.allHeroes;
        heroes = res.data.results;
        if(res.data.response === 'error') {
          return;
        } else {
          setHeroesData({...heroesData, allHeroes: heroes})
        }
    }).catch(error => console.log('Error: ' + error))
  }

  const handleHero = (heroID) => {
    const selectedHero = heroesData.allHeroes.find(hero => {
      return hero.id === heroID;
    })

    setHeroesData({...heroesData, viewHero: selectedHero})
  }

  const handleAdd = (heroID) => {
    
    const newHero = heroesData.allHeroes.find(hero => {
      return hero.id === heroID;
    })

    const isRepeated = () => {
      const res = heroesData.myHeroes.map(hero => {
        if(hero.id === newHero.id) {
          console.log('REPETIDO');
          return true;
        } else {
          console.log('TODO BIEN');
          return false;
        }
      })
      const result = res.includes(true);

      return result;
    }

    if(isRepeated()) {
      return;
    } else {
      return setHeroesData({...heroesData, myHeroes: [...heroesData.myHeroes, newHero]})
    }

  }

  const handleDelete = (heroID) => {

    const filteredHero = heroesData.myHeroes.filter(hero => {
      return hero.id !== heroID;
    })

    setHeroesData({...heroesData, myHeroes: filteredHero})

  }

  return (
    <HeroesContext.Provider value={{...heroesData, userToken, handleEmail, handlePassword, handleSubmit, handleLogout, handleHero, handleAdd, handleDelete, handleSearchHero, handleName}}>

      <div className="App">

        <BrowserRouter>
        
          <Header />

          <Switch>

            <Route exact path='/' component={Team} />

            <Route path='/login' component={Login} />

            <Route path='/search' component={SearchHero} />
            
            <Route path='/hero/:id' component={HeroDetail} />

          </Switch>

        </BrowserRouter>

      </div>
        
    </HeroesContext.Provider>
  );
}

export default App;

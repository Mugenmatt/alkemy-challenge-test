import React, {useState} from 'react';
import axios from 'axios';
import HeroesContext from './context/HeroesContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HeroDetail from './pages/HeroDetail/HeroDetail';
import Login from './pages/Login/Login';
import SearchHero from './pages/SearchHero/SearchHero';
import Team from './pages/Team/Team';
import Swal from 'sweetalert2';

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
  const [isFetching, setIsFetching] = useState(false);
  const [heroesData, setHeroesData] = useState(heroesState)
  const [heroName, setHeroName] = useState('')


  
  // const handleEmail = (e) => {
  //   setEmail(e.target.value)
  // }


  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setIsFetching(true);
    
  //   if(email === '' || password === '') {
  //     console.log('Input cannot be empty');
  //     setTimeout(() => {
  //       setErrorEmpty(false);
  //     }, 2000);
  //     return setErrorEmpty(true);
  //   }

  //   if(email !== 'challenge@alkemy.org' || password !== 'react') {
  //     console.log('invalid email or password');
  //     setTimeout(() => {
  //       setErrorFilled(false);
  //     }, 2000);
  //     return setErrorFilled(true);
  //   }


    // axios.post(`http://challenge-react.alkemy.org/`,{
    //   email: 'challenge@alkemy.org',
    //   password: 'react'
    // })
    // .then(res => {
    //   window.localStorage.setItem('token', JSON.stringify(res.data.token))
    //   setUserToken(true)
    //   setIsFetching(false);
    //   Swal.fire(
    //     'Logged in!',
    //     'You just logged in!',
    //     'success'
    //   )
    // }).catch(error => {
    //   console.log('ERROR:' + error)
    //   setIsFetching(false);
    // })
  // }


  const handleLogout = e => {
    setUserToken(false);
    window.localStorage.clear('token');
    Swal.fire(
      'Logged Out!',
      'You just logged out!',
      'success'
    )
  }


  const handleName = (e) => {
    const name = e.target.value;
    setHeroName(name);
  }


  const handleSearchHero = () => {
    setIsFetching(true);
    console.log('Fetching');
    axios.get(`${proxy}/${urlToken}/search/${heroName}`)
    .then(res => {
        let heroes = heroesData.allHeroes;
        heroes = res.data.results;
        if(res.data.response === 'error') {
          Swal.fire(
            'Hero not found!',
            'Try with few letters',
            'error'
          )
          return;
        } else {
          setHeroesData({...heroesData, allHeroes: heroes})
          setIsFetching(false);
          console.log('Fetch Done');
        }
    }).catch(error => {
      console.log('Error: ' + error)
      setIsFetching(false);
    })
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'He/She is already on your team!'
      })
      return;
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added successfully!'
      })
      return setHeroesData({...heroesData, myHeroes: [...heroesData.myHeroes, newHero]})
    }

  }

  const handleDelete = (heroID) => {

    const filteredHero = heroesData.myHeroes.filter(hero => {
      return hero.id !== heroID;
    })

    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: `No`,
      denyButtonText: `Yes`,
    }).then((result) => {
      if (result.isDenied) {
        setHeroesData({...heroesData, myHeroes: filteredHero})
        Swal.fire('Deleted', '', 'success')
      } else if (result.isConfirmed) {
        return;
      }
    })
  }

  return (
    <HeroesContext.Provider value={
      {
        ...heroesData,
        userToken,
        setUserToken,
        setIsFetching,
        isFetching,
        // handleEmail,
        // handlePassword,
        // handleSubmit,
        handleLogout,
        // errorEmpty,
        // errorFilled,
        handleHero,
        handleAdd,
        handleDelete,
        handleSearchHero,
        handleName
      }
    }>

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

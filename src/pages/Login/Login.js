import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import HeroesContext from '../../context/HeroesContext';
import FormLogin from '../../components/Login/Form/FormLogin'

const Login = () => {

    const context = useContext(HeroesContext);
    const {userToken} = context;

    if(userToken){
        return <Redirect to='/' />;
    }
    return (
        <>
            <FormLogin />
        </>
    );
};

export default Login;
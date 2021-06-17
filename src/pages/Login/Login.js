import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import HeroesContext from '../../context/HeroesContext';
import Form from '../../components/Login/Form/Form'

const Login = () => {

    const context = useContext(HeroesContext);
    const {userToken} = context;

    if(userToken){
        return <Redirect to='/' />;
    }
    return (
        <>
            <Form />
        </>
    );
};

export default Login;
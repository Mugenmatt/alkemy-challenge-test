import React, {useContext} from 'react';
import HeroesContext from '../../../context/HeroesContext';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.css'
import Swal from 'sweetalert2';

const FormLogin = () => {
    const context = useContext(HeroesContext);
    const {setUserToken, setIsFetching} = context;
    return (
        <>
            <Formik

                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema = {
                    Yup.object({
                        email: Yup.string()
                        .email('Invalid email adress')
                        .required('Required')
                        .oneOf(['challenge@alkemy.org'], 'Invalid email'),
                        password: Yup.string()
                        .required('Required')
                        .oneOf(['react'], 'Invalid password'),
                    })
                }

                onSubmit={(values, {setSubmitting, resetForm}) => {

                    axios.post(`http://challenge-react.alkemy.org/`,{
                    email: 'challenge@alkemy.org',
                    password: 'react'
                    })
                    .then(res => {
                    window.localStorage.setItem('token', JSON.stringify(res.data.token))
                    setUserToken(true)
                    setIsFetching(false);
                    Swal.fire(
                        'Logged in!',
                        'You just logged in!',
                        'success'
                    )
                    }).catch(error => {
                    console.log('ERROR:' + error)
                    setIsFetching(false);
                    })

                    resetForm();
                    setSubmitting(false)
                }}
            >
            {({ errors, touched }) => (
                <Form className='form'>

                    <div className='labelInput'>
                        <label htmlFor="email" className="alkemy-form-label">Email</label>
                        <Field 
                            type="email" 
                            name='email' 
                            className="alkemy-form-control" 
                            id="email" 
                            placeholder="Type your email"
                        />

                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}

                    </div>

                    <div className='labelInput'>
                        <label htmlFor="password" className="alkemy-form-label">Password</label>
                        <Field 
                            type="password" 
                            name='password' 
                            className="alkemy-form-control" 
                            id="password" 
                            placeholder="Type your password" 
                        />

                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}

                    </div>
                    
                    <button 
                        type="submit" 
                        className="alkemy-btn-primary"
                    >
                        Log In
                    </button>
                        
                </Form>
            )}
            </Formik>

        </>
    );
};

export default FormLogin;
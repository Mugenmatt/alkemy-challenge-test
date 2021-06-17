import React, {useContext} from 'react';
import './index.css'
import HeroesContext from '../../../context/HeroesContext';
import Error from '../../Error/Error';

const Form = () => {
    const context = useContext(HeroesContext);
    const {handleEmail, handlePassword, handleSubmit, errorEmpty, errorFilled} = context;

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="email" className="alkemy-form-label">Email</label>
                    <input type="email" className="alkemy-form-control" id="email" placeholder="Type your email" onChange={handleEmail} />
                </div>

                <div>
                    <label htmlFor="password" className="alkemy-form-label">Password</label>
                    <input type="password" className="alkemy-form-control" id="password" placeholder="Type your password" onChange={handlePassword} />
                </div>
                
                {
                    errorFilled && <Error errorTxt='Invalid email or password' />
                }
                
                {
                    errorEmpty && <Error errorTxt='Input cannot be empty' />
                }

                <button type="submit" className="alkemy-btn-primary">Log In</button>
                
            </form>

        </>
    );
};

export default Form;
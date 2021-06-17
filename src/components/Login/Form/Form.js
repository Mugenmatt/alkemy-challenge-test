import React from 'react';
import './index.css'
const Form = () => {
    return (
        <>
        
            <form className='form'>

                <div>
                    <label for="email" className="alkemy-form-label">Email</label>
                    <input type="email" className="alkemy-form-control" id="email" placeholder="Type your email" />
                </div>

                <div>
                    <label for="password" className="alkemy-form-label">Password</label>
                    <input type="password" className="alkemy-form-control" id="password" placeholder="Type your password" />
                </div>

                <button type="button" className="alkemy-btn-primary">Log In</button>
                
            </form>

        </>
    );
};

export default Form;
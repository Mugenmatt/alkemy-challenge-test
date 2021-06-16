import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({name, powerstats}) => {
    return (
        <div class="alkemy-card" style={{width: '18rem', textAlign:'center'}}>
            <img class="card-img-top" src="https://www.androfast.com/wp-content/uploads/2018/01/placeholder.png" alt="Imagen de card" />
            <div class="card-body">
                <h5 class="card-title">Nombre del heroe</h5>
                <p class="card-text">Powerstats</p>
                <p class="card-text">Powerstats</p>
                <p class="card-text">Powerstats</p>

                <Link to='/hero/:id'>
                    <a class="alkemy-btn-primary btn-primary"> Detalle </a>
                </Link>

                <a class="alkemy-btn-danger"> Eliminar </a>

            </div>
        </div>
    );
};

export default Card;
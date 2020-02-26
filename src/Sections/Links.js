import React from 'react';
import {Link} from 'react-router-dom';
import './Links.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Links = ()=>{
    return(
        <nav className="nav">
            <Link to="/">
                <FontAwesomeIcon icon={faHome}/>
            </Link>
            <Link to="/lunes">
                Lunes
            </Link>
            <Link to="/martes">
                Martes
            </Link>
            <Link to="/miercoles">
                Miércoles
            </Link>
            <Link to="/jueves">
                Jueves
            </Link>
            <Link to="/viernes">
                Viernes
            </Link>
            <Link to="/sabado">
                Sábado
            </Link>
            <Link to="/domingo">
                Domingo
            </Link>
        </nav>

    )
}


export default Links;
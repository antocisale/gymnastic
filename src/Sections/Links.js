import React from 'react';
import {Link} from 'react-router-dom';

const Links = ()=>{
    return(
        <nav className="nav">
            <Link to="/">
                Home
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
        </nav>

    )
}


export default Links;
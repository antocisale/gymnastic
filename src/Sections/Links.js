import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import '../App.scss';
import useSwitchBoolean from '../Hooks/SwitchBoolean';

const Links = ()=>{
    const [menu,toggleMenu] = useSwitchBoolean(false);

    const showMenu = ()=>{
        toggleMenu();

    };

    return(
        <div>
            <button onClick={showMenu}>
                <FontAwesomeIcon icon={faHome}/>
            </button>
            <nav className="nav" {...wrapper}>
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
        </div>

    )
}


export default Links;
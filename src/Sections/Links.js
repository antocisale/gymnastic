import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import '../App.scss';
import useSwitchBoolean from '../Hooks/SwitchBoolean';

const Links = ()=>{
    const [menu,toggleMenu] = useSwitchBoolean();
    

    const showMenu = e=>{
        toggleMenu();
    };

    const unwrapMenu = menu ? "nav wrapper shown" : "nav wrapper";

    return(
        <div className="nav">
            <button onClick={showMenu}>
                {
                    menu ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>
                }
                
            </button>
            <nav className={unwrapMenu}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome}/>
                </Link>
                <Link to="/lunes" onClick={showMenu}>
                    Lunes
                </Link>
                <Link to="/martes" onClick={showMenu}>
                    Martes
                </Link>
                <Link to="/miercoles" onClick={showMenu}> 
                    Miércoles
                </Link>
                <Link to="/jueves" onClick={showMenu}>
                    Jueves
                </Link>
                <Link to="/viernes" onClick={showMenu}>
                    Viernes
                </Link>
                <Link to="/sabado" onClick={showMenu}>
                    Sábado
                </Link>
                <Link to="/domingo" onClick={showMenu}>
                    Domingo
                </Link>
            </nav>
        </div>

    )
}


export default Links;
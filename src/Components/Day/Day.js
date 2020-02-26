import React,{useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';
import activitiesContext from '../../activitiesContext';
import logo from '../../images/home.png';
import './Day.scss';
import {Link} from 'react-router-dom';


const Day = () =>{
    const {listAct,setDay, day, showModal} = useContext(activitiesContext);
    const [lista,setLista] = useState(listAct);
    const {id} = useParams(); 

    let dia = lista.find(dia => dia.id == id);
    
    return(
        <div className="day">
            <header>
                <div>
                <img src={logo}/>
                <h2>{dia.day}</h2>
                </div>
                <Link to='./'>
                    <FontAwesomeIcon icon={faTimes}/>
                </Link>
            </header>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Actividad</th>
                        <th colSpan="2">Tiempo</th>
                        <th>Repeticiones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dia.exercises.map(act=>{
                        return <tr key={act.exercise}>
                                <td>
                                    <label>
                                    <input type="checkbox"></input>
                                    </label>
                                </td>
                                <td>{act.exercise}</td>
                                <td>{act.time}</td>
                                <td>{act.timeType}</td>
                                <td>{act.reps}</td>
                                <td>
                                    <button>
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </button>
                                    <button>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <footer>
                <button onClick={()=>{setDay(dia.id);showModal()}}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </button>
            </footer>
        </div>
    )
}


export default Day
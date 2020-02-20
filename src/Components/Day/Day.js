import React,{useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';
import activitiesContext from '../../activitiesContext';


const Day = () =>{
    const {listAct,setDay} = useContext(activitiesContext);
    const {id} = useParams(); 

    const dia = listAct.find(dia=>{
        return dia.id ==id
    })

    return(
        <div>
            <header>
                <h2>{dia.day}</h2>
                <button>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </header>
            <table>
                <thead>
                    <th>Checkbox</th>
                    <th>Actividad</th>
                    <th>Tiempo</th>
                    <th></th>
                    <th>Repeticiones</th>
                    <th>Tachito</th>
                    <th>Lapicito</th>
                </thead>
                <tbody>
                    {dia.exercises.map(act=>{
                        return <tr>
                                <td></td>
                                <td>{act.name}</td>
                                <td>{act.time}</td>
                                <td>{act.timeType}</td>
                                <td>{act.reps}</td>
                                <td>Tachito</td>
                                <td>Lapicito</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <footer>
                <button onClick={setDay(dia.day)}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </button>
            </footer>
        </div>
    )
}


export default Day
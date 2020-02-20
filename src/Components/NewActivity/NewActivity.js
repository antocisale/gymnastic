import React,{useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';
import activitiesContext from '../../activitiesContext';

import './NewActivity.scss';

const NewActivity = () =>{
    const [exercise, setExercise] = useState("");
    const [time,setTime] = useState(0);
    const [timeType, setTimeType] = useState("hs");
    const [reps, setReps] = useState(0);
    const {addAct,day} = useContext(InputContext);

    return(
        <div className="activity-container">
            <header>
                <h2>Nueva Actividad</h2>
                <button>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </header>
            <form id="newActivity">
                <label for="activity">
                    <FontAwesomeIcon icon={faDumbbell}/>
                    <input type="text" id="activity" placeholder="Actividad" onChange={e=>{setExercise(e.target.value)}}/>
                </label>
                <label for="time">
                    <FontAwesomeIcon icon={faClock}/>
                    <input type="number" id="time" min="0" placeholder="Tiempo" onChange={e=>{setTime(e.target.value)}}/>
                </label>
                <select name="timeType" onChange={e=>{setTimeType(e.target.value)}}>
                    <option value="hs">Hs</option>
                    <option value="mins">Min</option>
                    <option value="sec">Seg</option>
                </select>
                <label for="repetitions" onChange={e=>{setReps(e.target.value)}}>
                    <FontAwesomeIcon icon={faRedoAlt}/>
                    <input type="number" id="repetitions" min="0" placeholder="Cant. Repeticiones"/>
                </label>
            </form>
            <footer>
                <button>Cancelar</button>
                <input type="submit" form="newActivity" value="Agregar +" onClick={AddAct({exercise, time, timeType, reps},day)}/>
            </footer>
        </div>            
    )
}


export default NewActivity;
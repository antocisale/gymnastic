import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';
import activitiesContext from '../../activitiesContext';

import './NewActivity.scss';

const ModalWrapper = props => {
    const {exercise, setExercise,time, setTime, setTimeType, reps, setReps,show, showModal} = useContext(activitiesContext);
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <div className="addAct">
                <header>
                    <h2>{props.title}</h2>
                    <button onClick={showModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </header>
                <form id="newActivity">
                            <label htmlFor="activity">
                                <FontAwesomeIcon icon={faDumbbell}/>
                                <input type="text" id="activity" value={exercise} placeholder="Actividad" onChange={e=>{setExercise(e.target.value)}}/>
                            </label>
                            <label htmlFor="time">
                                <FontAwesomeIcon icon={faClock}/>
                                <input type="number" id="time" min="0" value={time} placeholder="Tiempo" onChange={e=>{setTime(e.target.value)}}/>
                                <select name="timeType" onChange={e=>{setTimeType(e.target.value)}}>
                                <option value="hs">Hs</option>
                                <option value="mins">Min</option>
                                <option value="sec">Seg</option>
                            </select>
                            </label>

                            <label htmlFor="repetitions" >
                                <FontAwesomeIcon icon={faRedoAlt}/>
                                <input type="number" id="repetitions" value={reps} min="0" placeholder="Cant. Repeticiones" onChange={e=>{setReps(e.target.value)}}/>
                            </label>
                        </form>
                <footer>
                    <button onClick={showModal}>Cancelar</button>
                    {props.children}
                </footer>
            </div>
        </div>
    );
};


export default ModalWrapper;
import React, {useContext} from 'react';
import activitiesContext from '../../activitiesContext';
import ModalWrapper from './ModalWrapper';


const NewActivity = props => {
    const {day, exercise, time, timeType, reps, showModal,editAct,editIndex} = useContext(activitiesContext);

    return (
        <ModalWrapper
        {...props}
        title="Editar Actividad"
        >
            <button onClick={()=>{editAct(editIndex,{exercise, time, timeType, reps},day); showModal(null)}} >Editar</button>
        </ModalWrapper>
    );
};

export default NewActivity;
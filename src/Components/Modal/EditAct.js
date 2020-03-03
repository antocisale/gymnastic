import React, {useContext} from 'react';
import activitiesContext from '../../activitiesContext';
import ModalWrapper from './ModalWrapper';


const NewActivity = props => {
    const {addAct,day, exercise, time, timeType, reps, show, showModal,editAct} = useContext(activitiesContext);

    return (
        <ModalWrapper
        {...props}
        title="Editar Actividad"
        >
            <button onClick={()=>{editAct(exercise, time, timeType, reps,day); showModal(null)}} >Agregar +</button>
        </ModalWrapper>
    );
};

export default NewActivity;
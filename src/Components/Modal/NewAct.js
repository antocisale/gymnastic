import React, {useContext} from 'react';
import activitiesContext from '../../activitiesContext';
import ModalWrapper from './ModalWrapper';


const NewActivity = props => {
    const {addAct,day, exercise, time, timeType, reps, showModal} = useContext(activitiesContext);

    return (
        <ModalWrapper
        {...props}
        title="Nueva Actividad"
        >
            <button onClick={()=>{addAct({exercise, time, timeType, reps},day); showModal(null)}} >Agregar +</button>
        </ModalWrapper>
    );
};

export default NewActivity;
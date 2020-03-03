import React, {useContext} from 'react';
import activitiesContext from '../../activitiesContext';
import NewActivity from './NewAct';
import EditActivity from './EditAct';


const ModalConductor = props => {
    const {currentModal, setCurrentModal} = useContext(activitiesContext);
    switch (currentModal) {
        case 'AGREGAR': 
        return <NewActivity {...props}/>;

        case 'EDITAR':
        return <EditActivity {...props}/>;

        default:
        return null;
    }
};


export default ModalConductor;
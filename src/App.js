import React,{useState} from 'react';
import './App.css';
import activitiesContext from './activitiesContext';
import Links from './Sections/Links';
import SwitchComponent from './Sections/SwitchComponent';
import {BrowserRouter} from 'react-router-dom';
import ModalConductor from './Components/Modal/ModalConductor';



function App() {
  const [listAct, setListAct] = useState([
    {
      id:"lunes",
    day: "Lunes",
    exercises:[]
  },
  {
    id:"martes",
    day: "Martes",
    exercises:[]
  },
  {
    id:"miercoles",
    day: "Miércoles",
    exercises:[]
  },
  {
    id:"jueves",
    day: "Jueves",
    exercises:[{
      exercise: "hola",
      time: "10",
      timeType:"mins",
      reps: "2"
    }]
  },
  {
    id:"viernes",
    day: "Viernes",
    exercises:[]
  },
  {
    id:"sabado",
    day: "Sábado",
    exercises:[]
  },
  {
    id:"domingo",
    day: "Domingo",
    exercises:[]
  },
]);
  const [day, setDay] = useState("lunes");
  const [exercise, setExercise] = useState("");
  const [time,setTime] = useState(0);
  const [timeType, setTimeType] = useState("hs");
  const [reps, setReps] = useState(0);
  const [show,setShow] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const showModal = (modal)=>{
    setShow(!show);
    setCurrentModal(modal);
  }

  const addAct = (activity,date)=>{
    let clon = [...listAct];
    let index = clon.findIndex(dia =>{
      return dia.id == date;
    });
    clon[index].exercises.push(activity);

    setListAct(clon);
    setExercise("");
    setTime("");
    setReps("");
    };
  
    const delAct = (activ,date) =>{
      let clon = [...listAct];
      let index = clon.findIndex(dia =>{
        return dia.id == date;
      });
      let act = clon[index].exercises.findIndex(act =>{return act.exercise==activ});
      console.log(act)
      clon[index].exercises.splice(act,1);
      console.log(clon)
      setListAct(clon);
    };

    const editAct = (NewExercise, time, timeType, reps,date) =>{  ///falta editar porque necesito que loopee entre los elementos dentro del array exercises
      let index = listAct.find(dia =>{
        if (dia.id == date){
          for (let i=0; i<dia.exercises.length; i++){
            return dia.exercises[i] == exercise
          }
        };
      });
      console.log(index)
      index.exercise = NewExercise;
      index.time = time;
      index.timeType = timeType;
      index.reps = reps;

    }

  return (
    <div className="main">
        <activitiesContext.Provider value={
        {
          listAct,
          setListAct,
          addAct,
          day,
          setDay,
          exercise, 
          setExercise,
          time,
          setTime,
          timeType,
          setTimeType,
          reps, 
          setReps,
          showModal,
          show,
          delAct,
          currentModal, 
          setCurrentModal,
          editAct
        }
      }>
        <BrowserRouter >
          <Links></Links>
          <SwitchComponent></SwitchComponent>
        </BrowserRouter>
        <ModalConductor></ModalConductor>

      </activitiesContext.Provider>
    </div>
  );
}

export default App;




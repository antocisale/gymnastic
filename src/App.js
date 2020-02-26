import React,{useState} from 'react';
import './App.css';
import activitiesContext from './activitiesContext';
import Links from './Sections/Links';
import SwitchComponent from './Sections/SwitchComponent';
import {BrowserRouter} from 'react-router-dom';
import NewActivity from './Components/NewActivity/NewActivity';

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
  const [show,setShow] = useState("false")

  const showModal = ()=>{
    setShow(!show);
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
          show
        }
      }>
        <BrowserRouter >
          <Links></Links>
          <SwitchComponent></SwitchComponent>
        </BrowserRouter>
        <NewActivity></NewActivity>
      </activitiesContext.Provider>
    </div>
  );
}

export default App;




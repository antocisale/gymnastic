import React,{useState} from 'react';
import './App.css';
import activitiesContext from './activitiesContext';
import Links from './Sections/Links';
import SwitchComponent from './Sections/SwitchComponent';
import {BrowserRouter} from 'react-router-dom';

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
    exercises:[]
  },
  {
    id:"viernes",
    day: "Viernes",
    exercises:[]
  },
]);
  const [day, setDay] = useState("");

  const addAct = (activity,date)=>{
    const clone = [...listAct];
    let index = clone.findIndex(dia =>{
      return dia.day == date;
    });
    clone[index].exercises.push(activity)

    setListAct(...clone)
    };

  return (
    <div>
        <activitiesContext.Provider value={
        {
          listAct,
          setListAct,
          addAct,
          day,
          setDay
        }
      }>
        <BrowserRouter>
          <Links></Links>
          <SwitchComponent></SwitchComponent>
        </BrowserRouter>
      </activitiesContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Day from '../Components/Day/Day';
import home from '../images/home.png';
import '../App.scss';


const SwitchComponent = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <div className="home">
                <img src={home} style={{width:"350px"}}/>
                <h1>Gymnastic!</h1>
                <h2>Create your weekly Gym Routine</h2>
                </div>

            </Route>
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} /> 
            <Route path="/:id" component={Day} /> 
            <Route path="/:id" component={Day} /> 
            <Route path="/:id" component={Day} /> 
        </Switch>
    )
}

export default SwitchComponent;
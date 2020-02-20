import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Day from '../Components/Day/Day'

const SwitchComponent = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <h1>Hola!</h1>
            </Route>
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} />
            <Route path="/:id" component={Day} /> 
            <Route path="/:id" component={Day} /> 
        </Switch>
    )
}

export default SwitchComponent;
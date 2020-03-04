import React, {useState} from 'react';

const SwitchBoolean = ()=>{
    const [show,setShow]= useState(false);

    const toggleValue = ()=> setShow(!show);

    return [show, toggleValue];

}


export default SwitchBoolean;
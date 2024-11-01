// Code Keypad Component Here
 import React from 'react';

function Keypad (){
    function handleOnchange(event){
        console.log("Entering password...")
    } 
    return (
        <div>
            <form>
            <input onChange={handleOnchange} type="password" placeholder="input password"/>
            </form>
        </div>
    )
}

export default Keypad;
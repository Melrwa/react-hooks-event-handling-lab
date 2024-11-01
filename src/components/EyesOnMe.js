// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    
    function handleFOcus(){
        console.log("Good!")
    }

    function handleBlur(){
        console.log("Hey! Eyes on me!")
    }
    
    return (
      <button onFocus={handleFOcus} onBlur={handleBlur}>Eyes on me</button>  
    );
}
export default EyesOnMe;
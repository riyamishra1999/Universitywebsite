import React from "react";
import { useState } from "react";
import './App.css';

export default function App(){
    const[count, setCount] = useState(0);
    function handleClick(){
      setCount(count + 1);
    }

    function handleDecrease () {
        setCount(count - 1);
    }

    function reset(){
        setCount(0);
    }
    return(

    <div className="App">

     <button onClick= {handleClick}>Increase</button>

     <input className= "text_container" type="text" value = {count} onChange ={ e => setCount(e.target.value)} />

     <button onClick={handleDecrease}>Decrease</button>

     <button onClick = {reset}>Reset!</button>

    </div>

    );
}

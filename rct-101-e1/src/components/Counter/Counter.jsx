import React from "react";
import styles from "./counter.module.css";
import {useState} from "react";

const Counter = () => {

  // sample value to be replaced
  const [count,setCount] =useState(0);

  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
    const handleInc =()=>{
      setCount(count+1)
    }
    const handleDec =()=>{
      if(count>0)
      {
        setCount(count-1);
      }
    }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>handleInc()}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>handleDec()}>-</button>
    </div>
  );
};

export default Counter;

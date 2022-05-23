import React, {useState} from "react";
import styles from "./addTask.module.css";


const AddTask = () => {


  const [value,setValue] =useState("");
  const [todos,setTodos] = useState([]);
  const onDelete =(id) =>{
    let newTodos = todos.filter((todo)=>todo.id!==id);
    setTodos(newTodos);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." 
        value={value} 
        onChange={(e)=>{
        setValue(e.target.value);
        }}
        onKeyDownCapture={(e)=>{
          if(e.key=== "Enter")
          {
            setTodos([...todos,{id:Date.now(), value: value, isCompleted: false}]);
            setValue("");
          }
        }}
        />
      <button data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;

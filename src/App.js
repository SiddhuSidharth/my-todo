import  {useState} from "react";
import './App.css';
import {Task} from './Task';

function App() {
  const [todoList,settodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const handleNewTask = (event) => {
    setNewTask(event.target.value);

  }
  const handleClick =() =>{
    const task = {
      id: todoList.length === 0 ? 0: todoList[todoList.length-1].id+1,
      taskName : newTask,

    }
    const newTodoList = [...todoList,task];
    settodoList(newTodoList);

  }
  const deleteTask = (id)=>{
      // const newList= todoList.filter((task)=>{
      //   if(task === taskname){
      //     return false;
      //   }
      //   else{
      //     return true;
      //   }

      // })
      //making more easy
      const newList= todoList.filter((task) => task.id !== id);
      settodoList(newList);
     
  }
  return (
    <div className="App">
        <div className='addTask'>
          <input onChange={handleNewTask}/>
          <button onClick={handleClick}>Add Task</button>
        </div>
        <div className="list">
         {todoList.map((task)=>{
          return(
           <Task 
           taskname={task.taskName} 
           id={task.id} 
           deleteTask={deleteTask}
           />
          );  

         })}

        </div>
      </div>
  );
        }

export default App;

import { useState } from 'react'
import './App.css'

function App() {

  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);

  const addTask = () =>{
    if (task.trim() === '') return;
    console.log(task);
    setTasks([...tasks,task]);
    setTask('');
    console.log(tasks);
  };


  return (
    <>
      <h1>ToDo App</h1>
      <div className='inputTaskContainer'>

        <input className='inputHome' type="text" value={task} id="inputTaskData" onChange={(e)=>setTask(e.target.value)} placeholder='Enter Your Task'/>

        <button className='addbtn' onClick={addTask}>Add</button>
      </div>
      <div className='allTask'>
        {
          tasks.map((task,index)=>(
            <div className='taskElement'>
            <input type="checkbox" className='checkBox'/>
             <h2 key={index}>{task}</h2> 
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

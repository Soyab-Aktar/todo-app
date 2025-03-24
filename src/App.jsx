import { useState } from 'react'
import './App.css'

function App() {

  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);
  

  const addTask = () =>{
    if (task.trim() === '') return;
    setTasks([...tasks,task]);
    setTask('');
  };

  const removeTask = (index) => {
    const updateTask = tasks.filter((_,i)=>i !==index);
    setTasks(updateTask);
  }

  return (
    <>
      <h1>ToDo App</h1>
      <div className='WholeContainer'>
      <div className='inputTaskContainer'>
        <input className='inputHome' type="text" value={task} id="inputTaskData" onChange={(e)=>setTask(e.target.value)} placeholder='Enter Your Task'/>

        <button className='addbtn' onClick={addTask}>Add</button>
      </div>
      <div className='allTask'>
        {
          tasks.map((task,index)=>(
            <div className='taskElement'>
            <div className='checkbox' onClick={()=> removeTask(index)}></div>
             <span key={index}>{task}</span> 
            </div>
          ))
        }
      </div>

      </div>
    </>
  )
}

export default App

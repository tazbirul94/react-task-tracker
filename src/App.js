import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    fetchTasks() 
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    setTasks(data)
    return data
}
  
  //Delete Task
  const addTask = async (task) => {
      // const id = Math.floor(Math.random() * 1000) + 1
      // const newTask = {id, ...task}
      // setTasks([...tasks, newTask])
    console.log(task)
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      console.log(data)
      setTasks([...tasks, data])
    }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
     <Header className="header" title={"New Task"} onAdd={() => setShowAdd(!showAdd)}  showAdd={showAdd}/>
    { showAdd && <AddTask onAdd={addTask}/>}
    { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;

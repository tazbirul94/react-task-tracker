import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 15th',
      reminder: true
    },
    {
      id: 2,
      text: 'My Appointment',
      day: 'Feb 16th',
      reminder: false
    }
  ])

    //Delete Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

  //Delete Task
  const deleteTask = (id) => {
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

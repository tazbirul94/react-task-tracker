import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  return (
    <div className="container">
     <Header className="header" title={"New Task"}/>
    { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const name = "Rishabh";
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 3:30 pm',
        reminder: true
    }
]
)
  return (
    <div className="container">
      <Header title = 'Task Assigner'/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}



export default App;

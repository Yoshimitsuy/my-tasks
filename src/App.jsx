import React, { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';


function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]); 
  };

  return (
    <>
      <Header onAddTask={ addTask }/>
      <Tasks tasks={ tasks }/>
    </>
  );
}

export default App;

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

  const completedById = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return { 
          ...task, 
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <Header onAddTask={ addTask }/>
      <Tasks tasks={ tasks } onComplete={ completedById }/>
    </>
  );
}

export default App;

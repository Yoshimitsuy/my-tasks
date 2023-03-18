import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Y } from './components/Y';

const LOCAL_STORAGE = 'task:saved';

function App() {

  const [tasks, setTasks] = useState([]);

  const loadSaves = () => {
    const saves = localStorage.getItem(LOCAL_STORAGE);
    if(saves) {
      setSaveTasks(JSON.parse(saves));
    }
  };

  useEffect(() => {
    loadSaves();
  }, []);
  

  const setSaveTasks = (saves) => {
    setTasks(saves);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(saves));
  };

  const addTask = (taskTitle) => {
    setSaveTasks([
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
    setSaveTasks(newTasks);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setSaveTasks(newTasks);
  };

  return (
    <>
      <Header onAddTask={ addTask }/>
      <Tasks tasks={ tasks } onComplete={ completedById } onDelete={ deleteTaskById }/>
      <Y />
    </>
  );
}

export default App;

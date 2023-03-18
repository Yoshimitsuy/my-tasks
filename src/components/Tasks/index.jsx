import React from 'react';
import styles from './tasks.module.css';
import { Task } from '../Task';
import PropTypes from 'prop-types';


export function Tasks({ tasks, onComplete, onDelete }) {

  const tasksQtd = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={ styles.tasks }>
      <header className={ styles.header }>

        <div>
          <p className={ styles.createTask }>create tasks</p>
          <span>{ tasksQtd }</span>
        </div>

        <div >
          <p className={ styles.colorText }>completed tasks</p>
          <span>{ completedTasks } of { tasksQtd }</span>
        </div>

      </header>

      <div className={ styles.list }>
        {
          tasks.map(task => (
            <Task key={ task.id } task={ task } onComplete={ onComplete } onDelete={ onDelete }/>
          ))
        }
      </div>
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

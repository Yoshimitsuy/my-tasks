import React from 'react';
import styles from './tasks.module.css';
import { Task } from '../Task';
import PropTypes from 'prop-types';


export function Tasks({ tasks }) {
  return (
    <section className={ styles.tasks }>
      <header className={ styles.header }>

        <div>
          <p className={ styles.createTask }>create tasks</p>
          <span>10</span>
        </div>

        <div >
          <p className={ styles.colorText }>completed tasks</p>
          <span>1 of 10</span>
        </div>

      </header>

      <div className={ styles.list }>
        {
          tasks.map(task => (
            <Task key={ task.id } task={ task }/>
          ))
        }
      </div>
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.string.isRequired
};

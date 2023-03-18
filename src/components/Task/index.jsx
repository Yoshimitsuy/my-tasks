import React from 'react';
import styles from './task.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';


export function Task({ task, onComplete, onDelete }) {
  return (
    <div className={ styles.task }>
      <button className={ styles.checkContainer } onClick={ () => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill />: <div /> }
      </button>

      <p className={ task.isCompleted ? styles.taskCompleted : '' }>{ task.title }</p>

      <button className={ styles.delete } onClick={ () => onDelete(task.id) }>
        <FaTrashAlt size= { 20 }/>
      </button>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,

};
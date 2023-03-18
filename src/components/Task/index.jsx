import React from 'react';
import styles from './task.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';


export function Task({ task }) {
  return (
    <div className={ styles.task }>
      <button className={ styles.checkContainer }>
        <div />
      </button>

      <p>{ task.title }</p>

      <button className={ styles.delete }>
        <FaTrashAlt size= { 20 }/>
      </button>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired
};
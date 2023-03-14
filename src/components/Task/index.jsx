import React from 'react';
import styles from './task.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export function Task() {
  return (
    <div className={ styles.task }>
      <button className={ styles.checkContainer }>
        <div />
      </button>

      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

      <button className={ styles.delete }>
        <FaTrashAlt size= { 20 }/>
      </button>
    </div>
  );
}

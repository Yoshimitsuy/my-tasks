import React from 'react';
import styles from './tasks.module.css';

export function Task() {
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
    </section>
  );
}

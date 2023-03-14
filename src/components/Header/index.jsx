import React from 'react';
import styles from './header.module.css';
import todoLogo from '../../assets/todoLogo.svg';
import { BsClipboardPlusFill } from 'react-icons/bs';

export function Header() {
  return (
    <header className={ styles.header } >
      <img src={todoLogo} alt="" />

      <form className={ styles.newTaskForm }>
        <input type="text" placeholder='add a new task' />
        <button>
          create
          <BsClipboardPlusFill size={ 20 } />  
        </button>
      </form>
    </header>
  );
}

import React, { useState } from 'react';
import styles from './header.module.css';
import todoLogo from '../../assets/todoLogo.svg';
import { BsClipboardPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types';


export function Header({ onAddTask }) {

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title);
    setTitle('');
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className={ styles.header } >
      <img src={todoLogo} alt="" />

      <form onSubmit={ handleSubmit } className={ styles.newTaskForm }>
        <input type="text" placeholder='add a new task' value={ title } onChange={ onChangeTitle }/>
        <button>
          create
          <BsClipboardPlusFill size={ 20 } />  
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

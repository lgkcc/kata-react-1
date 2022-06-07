import React from 'react';

import classes from './addsTodo.module.scss';

const AddsTodo = ({ todos, setTodos, update, confirmUpdate, valueInput, setValueInput, inputRef }) => {
  const inputChange = (e) => setValueInput(e.target.value);
  const addTodo = () => {
    const id = Math.random() * Date.now();
    const todo = {
      name: valueInput,
      isPriority: false,
      isComplete: false,
      id,
      date: new Date(),
    };
    setTodos([...todos, todo]);
    setValueInput('');
  };
  const updateTodo = () => {
    confirmUpdate(valueInput);
    setValueInput('');
  };
  return (
    <div className={classes.addsTodo}>
      <input
        ref={inputRef}
        className={classes.addsTodo__input}
        type="text"
        placeholder="Whats need to be done?"
        value={valueInput}
        onChange={inputChange}
      />
      <button
        type="button"
        className={classes.addsTodo__btn}
        onClick={update.isUpdate ? () => updateTodo() : () => addTodo()}
      >
        {update.isUpdate ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default AddsTodo;

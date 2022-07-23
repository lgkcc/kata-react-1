import React from 'react';

import classes from './Filters.module.scss';
import ActionTodoButton from './ActionTodoButton';

const Filters = ({ filter, changeFilter, inputChange, find }) => {
  return (
    <div className={classes.filters}>
      <input
        type="text"
        placeholder="type to search"
        className={classes.filters__input}
        value={find}
        onChange={inputChange}
      />
      <ActionTodoButton title="All" filterStatus={filter} fc={changeFilter} />
      <ActionTodoButton title="Active" filterStatus={filter} fc={changeFilter} />
      <ActionTodoButton title="Done" filterStatus={filter} fc={changeFilter} />
    </div>
  );
};

export default Filters;

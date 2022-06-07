import React from 'react';

import classes from './filters.module.scss';
import Btn from './btn';

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
      <Btn title="All" filterStatus={filter} fc={changeFilter} />
      <Btn title="Active" filterStatus={filter} fc={changeFilter} />
      <Btn title="Done" filterStatus={filter} fc={changeFilter} />
    </div>
  );
};

export default Filters;

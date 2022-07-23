import React from 'react';

import classes from './Filters.module.scss';

const ActionTodoButton = ({ title, filterStatus, fc }) => {
  let backgroundColor;
  if (filterStatus === 'All') {
    backgroundColor = `${classes.filters__btn} ${classes.filters__btnfirst}`;
  } else if (filterStatus === 'Active') {
    backgroundColor = `${classes.filters__btn} ${classes.filters__btnsecond}`;
  } else {
    backgroundColor = `${classes.filters__btn} ${classes.filters__btnthird}`;
  }

  return (
    <button type="button" className={backgroundColor} onClick={() => fc(title)}>
      {title}
    </button>
  );
};

export default ActionTodoButton;

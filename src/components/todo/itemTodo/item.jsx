import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import classes from './item.module.scss';

const Item = ({
  name,
  deleteTodos,
  id,
  priorityTodos,
  priority,
  complete,
  completeTodos,
  date,
  updateInput,
  update,
}) => {
  const color = priority
    ? `${classes.item__btn} ${classes.active} material-symbols-outlined`
    : `${classes.item__btn} material-symbols-outlined`;
  const colorUpdate =
    update.id === id
      ? `${classes.item__btn} ${classes.active} material-symbols-outlined`
      : `${classes.item__btn} material-symbols-outlined`;
  let textColor = `${classes.item}`;
  if (priority || complete) {
    if (complete) {
      textColor = `${classes.item} ${classes.completed}`;
    } else {
      textColor = `${classes.item} ${classes.active}`;
    }
  }
  return (
    <div className={textColor}>
      <div className={classes.todoInfo}>
        <span tabIndex="0" role="button" onClick={() => completeTodos(id)} onKeyDown={() => completeTodos(id)}>
          {name}
        </span>
        <div>
          <button onClick={() => updateInput(id)} type="button" className={colorUpdate}>
            edit
          </button>
          <button
            type="button"
            className={`${classes.item__btn} material-symbols-outlined`}
            onClick={() => deleteTodos(id)}
          >
            delete
          </button>
          <button type="button" className={color} onClick={() => priorityTodos(id)}>
            priority_high
          </button>
        </div>
      </div>
      <span className={classes.time}>created {formatDistanceToNow(new Date(date))} ago</span>
    </div>
  );
};

export default Item;

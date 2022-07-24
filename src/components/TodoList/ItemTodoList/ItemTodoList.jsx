import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import classes from './ItemTodoList.module.scss';

const getPadTime = (time) => time.toString().padStart(2, '0');

const ItemTodoList = ({
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
  timer: timerTodo,
  updateTimer,
  todos,
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
  const { sec, min } = timerTodo;
  const newSec = Number(min * 60) + Number(sec);
  const [timer, setTimer] = useState(newSec);
  const [isRunning, setIsRunning] = useState(false);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setTimer((time) => {
          return time >= 1 ? time - 1 : 0;
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
  useEffect(() => {
    updateTimer(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, timer: { sec: seconds, min: minutes } };
        }
        return todo;
      })
    );
    console.log(seconds);
  }, [seconds]);
  const onStartTimer = () => {
    setIsRunning(true);
  };

  const onPauseTimer = () => {
    setIsRunning(false);
  };
  return (
    <div className={textColor}>
      <div className={classes.todoInfo}>
        <span
          tabIndex="0"
          role="button"
          onClick={() => {
            completeTodos(id);
            onPauseTimer();
          }}
          onKeyDown={() => completeTodos(id)}
        >
          {name}
        </span>
        <div>
          {minutes}:{seconds}
          <button type="button" onClick={onStartTimer} className={classes.stopTimer} />
          <button type="button" onClick={onPauseTimer} className={classes.startTimer} />
        </div>
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

export default ItemTodoList;

import React from 'react';

import classes from './todo.module.scss';
import Item from './itemTodo/item';

const Todo = ({ todos, deleteTodos, priorityTodos, filter, find, completeTodos, updateInput, update }) => {
  return (
    <>
      {!!find && (
        <div className={classes.todo}>
          {filter === 'All' &&
            todos
              .filter((todo) => todo.name.toLowerCase().includes(find.toLowerCase()))
              .map((todo) => (
                <Item
                  priority={todo.isPriority}
                  complete={todo.isComplete}
                  name={todo.name}
                  date={todo.date}
                  id={todo.id}
                  key={todo.id}
                  deleteTodos={deleteTodos}
                  priorityTodos={priorityTodos}
                  completeTodos={completeTodos}
                  updateInput={updateInput}
                  update={update}
                />
              ))}
          {filter === 'Active' &&
            todos
              .filter((todo) => todo.name.toLowerCase().includes(find.toLowerCase()))
              .filter((todo) => !todo.isComplete)
              .map((todo) => (
                <Item
                  name={todo.name}
                  priority={todo.isPriority}
                  complete={todo.isComplete}
                  date={todo.date}
                  id={todo.id}
                  key={todo.id}
                  deleteTodos={deleteTodos}
                  priorityTodos={priorityTodos}
                  completeTodos={completeTodos}
                  updateInput={updateInput}
                  update={update}
                />
              ))}
          {filter === 'Done' &&
            todos
              .filter((todo) => todo.name.toLowerCase().includes(find.toLowerCase()))
              .filter((todo) => todo.isComplete)
              .map((todo) => (
                <Item
                  name={todo.name}
                  priority={todo.isPriority}
                  complete={todo.isComplete}
                  date={todo.date}
                  id={todo.id}
                  key={todo.id}
                  deleteTodos={deleteTodos}
                  priorityTodos={priorityTodos}
                  completeTodos={completeTodos}
                  updateInput={updateInput}
                  update={update}
                />
              ))}
        </div>
      )}
      {!find && (
        <div className={classes.todo}>
          {filter === 'All' &&
            todos.map((todo) => (
              <Item
                name={todo.name}
                priority={todo.isPriority}
                complete={todo.isComplete}
                date={todo.date}
                id={todo.id}
                key={todo.id}
                deleteTodos={deleteTodos}
                priorityTodos={priorityTodos}
                completeTodos={completeTodos}
                updateInput={updateInput}
                update={update}
              />
            ))}{' '}
          {filter === 'Active' &&
            todos
              .filter((todo) => !todo.isComplete)
              .map((todo) => (
                <Item
                  name={todo.name}
                  priority={todo.isPriority}
                  complete={todo.isComplete}
                  date={todo.date}
                  id={todo.id}
                  key={todo.id}
                  deleteTodos={deleteTodos}
                  priorityTodos={priorityTodos}
                  completeTodos={completeTodos}
                  updateInput={updateInput}
                  update={update}
                />
              ))}
          {filter === 'Done' &&
            todos
              .filter((todo) => todo.isComplete)
              .map((todo) => (
                <Item
                  name={todo.name}
                  priority={todo.isPriority}
                  complete={todo.isComplete}
                  date={todo.date}
                  id={todo.id}
                  key={todo.id}
                  deleteTodos={deleteTodos}
                  priorityTodos={priorityTodos}
                  completeTodos={completeTodos}
                  updateInput={updateInput}
                  update={update}
                />
              ))}
        </div>
      )}
    </>
  );
};

export default Todo;

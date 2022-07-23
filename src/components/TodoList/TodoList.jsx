import React from 'react';

import classes from './TodoList.module.scss';
import ItemTodoList from './ItemTodoList/ItemTodoList';

const TodoList = ({ todos, deleteTodos, priorityTodos, filter, find, completeTodos, updateInput, update }) => {
  return (
    <>
      {!!find && (
        <div className={classes.todo}>
          {filter === 'All' &&
            todos
              .filter((todo) => todo.name.toLowerCase().includes(find.toLowerCase()))
              .map((todo) => (
                <ItemTodoList
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
                <ItemTodoList
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
                <ItemTodoList
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
              <ItemTodoList
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
                <ItemTodoList
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
                <ItemTodoList
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

export default TodoList;

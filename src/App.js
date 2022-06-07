import React, { useEffect, useRef, useState } from 'react';

import Header from './components/header/header';
import Filters from './components/filters/filters';
import Todo from './components/todo/todo';
import AddsTodo from './components/addsTodo/addsTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [update, setUpdate] = useState({ isUpdate: false, id: null });
  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef(null);

  const flagRef = useRef(true);

  useEffect(() => {
    if (!flagRef.current) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      const localStorageTodo = localStorage.getItem('todos');
      if (localStorageTodo) {
        setTodos(JSON.parse(localStorage.getItem('todos')));
      }
      flagRef.current = false;
    }
  }, [todos]);

  const deleteTodos = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const priorityTodos = (id) => {
    const updatePriority = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isPriority: !todo.isPriority };
      }
      return todo;
    });
    setTodos(updatePriority);
  };
  const completeTodos = (id) => {
    const updateComplete = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updateComplete);
  };
  const clearDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };
  const changeFilter = (filterName) => setFilter(filterName);
  const [find, setFind] = useState('');
  const inputChange = (e) => setFind(e.target.value);

  const updateInput = (id) => {
    const valueId = todos.find((todo) => todo.id === id);
    if (update.isUpdate && update.id === id) {
      setUpdate({ isUpdate: false, id: null });
      setValueInput('');
    } else {
      setUpdate({ isUpdate: true, id });
      inputRef.current.focus();
      setValueInput(valueId.name);
    }
  };
  const confirmUpdate = (value) => {
    const updateValue = todos.map((todo) => {
      if (todo.id === update.id) {
        return { ...todo, name: value };
      }
      return todo;
    });
    setTodos(updateValue);
    setUpdate({ isUpdate: false, id: null });
  };

  return (
    <div className="app">
      <div className="container">
        <Header todos={todos} clearDoneTodos={clearDoneTodos} />
        <Filters filter={filter} todos={todos} changeFilter={changeFilter} inputChange={inputChange} find={find} />
        <Todo
          deleteTodos={deleteTodos}
          filter={filter}
          todos={todos}
          priorityTodos={priorityTodos}
          find={find}
          completeTodos={completeTodos}
          updateInput={updateInput}
          update={update}
        />
        <AddsTodo
          todos={todos}
          setTodos={setTodos}
          update={update}
          confirmUpdate={confirmUpdate}
          valueInput={valueInput}
          setValueInput={setValueInput}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}

export default App;

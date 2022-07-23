import classes from './Header.module.scss';

const Header = ({ todos, clearDoneTodos }) => {
  const done = todos.filter((todo) => todo.isComplete);
  const more = todos.filter((todo) => !todo.isComplete);

  return (
    <header className={classes.header}>
      <h1>Todo list</h1>
      <div className={classes.states}>
        <span>
          {more.length} more to do, {done.length} done
        </span>
        {done.length > 0 && (
          <button type="button" onClick={clearDoneTodos}>
            Clear done todo
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

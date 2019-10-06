import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css'


const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
  const elements = todos.map((item) => {
    const {key, ...itemProps} = item; //деструктуризация

    return (
      <li key={item.key} className="list-group-item">
        <TodoListItem 
          {...itemProps} //без кея
          onDeleted={() => onDeleted(item.key)}
          onToggleImportant={() => onToggleImportant(key)}
          onToggleDone={() => onToggleDone(key)}
        />
      </li>
    )
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
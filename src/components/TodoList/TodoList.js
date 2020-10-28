import React from 'react';
import { TodoListShape } from './TodoListShape';
import { Todo } from '../Todo';

export const TodoList = React.memo(
  ({ todos }) => (
    <div>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  ),
);

TodoList.propTypes = TodoListShape;

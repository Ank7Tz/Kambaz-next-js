import { ListGroup } from "react-bootstrap";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function TodoList() {
  const {todos} = useSelector((state: RootState) => state.todoReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}

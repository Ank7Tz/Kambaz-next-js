import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Todo, deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex gap-2" key={todo.id}>
      <span className="flex-grow-1 mt-1">{todo.title}</span>
      <Button
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        {" "}
        Delete{" "}
      </Button>
      <Button
        className="btn"
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
      >
        {" "}
        Edit{" "}
      </Button>
    </ListGroup.Item>
  );
}

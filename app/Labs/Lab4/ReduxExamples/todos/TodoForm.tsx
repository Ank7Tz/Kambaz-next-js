import { Button, FormControl, ListGroup } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, updateTodo, setTodo} from "./todosReducer";
import { RootState } from "../../store";


export default function TodoForm() {
  const { todo } = useSelector((state : RootState) => state.todoReducer)
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex gap-2">
      <FormControl
        className="flex-grow-1"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <Button
        className="btn btn-success"
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
      >
        {" "}
        Add{" "}
      </Button>
      <Button
        className="btn btn-warning"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        {" "}
        Update{" "}
      </Button>
    </ListGroup.Item>
  );
}

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { ListGroup } from "react-bootstrap";
import { Todo } from "./ReduxExamples/todos/todosReducer";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  const { todos } = useSelector((state : RootState) => state.todoReducer);
  return (
    <div id="wd-array-state-variables" className="border">
      <h2>Array State Variable</h2>
      <button className="btn btn-success m-2" onClick={addElement}>
        Add Element
      </button>
      <ListGroup>
        {todos.map((todo : Todo) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {array.map((item, index) => (
          <li className="border d-flex justify-content-between" key={index}>
            <span className="m-3">{item}</span>
            <button
              className="btn btn-danger m-2"
              onClick={() => deleteElement(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

"use client";
import { useState } from "react";
import { Form } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;
export default function WorkingWithArrays() {
  const [todo, setTodo] = useState<{
    id: string;
    title: string;
    description: string;
    due: string;
    completed: boolean;
  }>({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos{" "}
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <Form.Control
        id="wd-todo-id"
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
      <h3>Removing from an Array</h3>
      <a
        id="wd-remove-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}{" "}
      </a>
      <Form.Control
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <Form.Control
        defaultValue={todo.id}
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <Form.Control
        defaultValue={todo.title}
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <hr />
      <h3>Updating Description in an Array</h3>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update Description
      </a>
      <div className="mb-2">
        <Form.Label htmlFor="wd-description-id">Todo ID:</Form.Label>
        <Form.Control
          id="wd-description-id"
          defaultValue={todo.id}
          className="w-25"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <Form.Label htmlFor="wd-description-text">Description:</Form.Label>
        <Form.Control
          id="wd-description-text"
          as="textarea"
          defaultValue={todo.description}
          className="w-50"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <hr />
      <h3>Updating Completed Status in an Array</h3>
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary float-end"
      >
        Update Completed Status
      </a>
      <div className="mb-2">
        <Form.Label htmlFor="wd-completed-id">Todo ID:</Form.Label>
        <Form.Control
          id="wd-completed-id"
          defaultValue={todo.id}
          className="w-25"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <Form.Check
          type="checkbox"
          id="wd-todo-completed"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          label="Completed"
        />
      </div>
      <hr />
    </div>
  );
}

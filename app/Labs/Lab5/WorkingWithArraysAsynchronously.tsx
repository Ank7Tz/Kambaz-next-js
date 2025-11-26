"use client";
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AxiosError } from "axios";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: client.Todo) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        setErrorMessage(axiosError.response.data.message);
      }
    }
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      id: -1,
      title: "New Posted Todo",
      completed: false,
      description: "",
    });
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (todo: client.Todo) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        setErrorMessage(axiosError.response.data.message);
      }
    }
  };

  const editTodo = (todo: client.Todo) => {
    try {
      const updatedTodos = todos.map((t) =>
        t.id === todo.id ? { ...todo, editing: true } : t
      );
      setTodos(updatedTodos);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        setErrorMessage(axiosError.response.data.message);
      }
    }
  };
  const updateTodo = async (todo: client.Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        setErrorMessage(axiosError.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />
            <input
              type="checkbox"
              className="form-check-input float-start me-2"
              defaultChecked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.editing === true ? (
              <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}{" "}
              </span>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>{" "}
      <hr />
    </div>
  );
}

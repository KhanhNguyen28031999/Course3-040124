import React, { useState, useEffect } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import Form from "./Form";
import "./styles.css";
import Header from "./TodoListHeader";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filterOptions, setFilterOptions] = useState([
    "all",
    "not-done",
    "done",
  ]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleCheck = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const countNotDone = todos.filter((todo) => !todo.done).length;
  const handleFilter = (event) => {
    setFilterType(event.target.value);
  };
  return (
    <div>
      <Header countNotDone={countNotDone} />
      <select value={filterType} onChange={handleFilter}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="todo-list-container">
        {todos
          .filter((todo) => {
            switch (filterType) {
              case "all":
                return true;
              case "not-done":
                return !todo.done;
              case "done":
                return todo.done;
              default:
                return false;
            }
          })
          .map((todo, index) => (
            <div className="todo-item-container" key={index}>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                checked={todo.done}
                onClick={() => toggleCheck(index)}
              >
                {todo.done ? (
                  <FaRegCheckCircle
                    className="item-done-button"
                    color="#9a9a9a"
                  />
                ) : (
                  <FaRegCircle className="item-done-button" color="#9a9a9a" />
                )}
              </button>
              <div className={`item-title ${todo.done ? "done" : ""}`}>
                {todo.text}
              </div>
            </div>
          ))}
      </div>
      <div
        className="form"
        style={{
          position: "absolute",
          bottom: 100,
          left: 0,
          width: "100%",
        }}
      >
        <Form createTodo={createTodo} />
      </div>
    </div>
  );
};

export default TodoList;

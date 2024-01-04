import React, { useState } from "react";
import "./styles.css";

const Form = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      createTodo({ text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

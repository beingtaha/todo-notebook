import React, { useState, useEffect } from "react";
import "./App.css";
import BookCover from "./components/BookCover";
import NotebookLayout from "./components/NotebookLayout";
import DeskScene from "./components/DeskScene";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("notebook-todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("notebook-todos", JSON.stringify(todos));
  }, [todos]);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setOpening(false);
    }, 700);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addTodo = (text) => {
    if (text.trim())
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };
  const toggleTodo = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
  const editTodo = (id, newText) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));

  return (
    <>
      <DeskScene />
      <div className="App">
        {!isOpen ? (
          <div className={`cover-wrapper ${opening ? "opening" : ""}`}>
            <BookCover onOpen={handleOpen} />
          </div>
        ) : (
          <div className="notebook-wrapper-anim open-anim">
            <NotebookLayout
              allTodos={todos}
              onAddTodo={addTodo}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
              onEditTodo={editTodo}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../styles/TodoPage.css";

const MAX_TODOS = 18;

function TodoItem({ todo, index, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div
        className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && (
          <svg viewBox="0 0 12 12" className="check-icon">
            <polyline
              points="2,6 5,9 10,3"
              fill="none"
              stroke="#2a6496"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="todo-number">{index + 1}.</span>
      {isEditing ? (
        <input
          className="todo-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <span
          className={`todo-text ${todo.completed ? "todo-text-done" : ""}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      {todo.completed && !isEditing && (
        <span className="todo-done-mark">✓</span>
      )}
      <button
        className="todo-delete-btn"
        onClick={() => onDelete(todo.id)}
        title="Erase task"
      >
        <svg
          viewBox="0 0 24 16"
          width="24"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Eraser body */}
          <rect
            x="1"
            y="2"
            width="18"
            height="11"
            rx="2"
            fill="#f5ede0"
            stroke="#d4b89a"
            strokeWidth="1"
          />
          {/* Pink top strip */}
          <rect
            x="1"
            y="2"
            width="18"
            height="5"
            rx="2"
            fill="#f4a0b0"
            stroke="#e08090"
            strokeWidth="0.8"
          />
          {/* Label */}
          <text
            x="9.5"
            y="12"
            textAnchor="middle"
            fontSize="3.5"
            fill="#a08060"
            fontFamily="Patrick Hand, cursive"
            fontWeight="600"
          >
            ERASER
          </text>
          {/* Shine */}
          <rect
            x="3"
            y="3"
            width="6"
            height="2"
            rx="1"
            fill="rgba(255,255,255,0.5)"
          />
          {/* Rubber shavings hint */}
          <ellipse
            cx="21"
            cy="10"
            rx="2"
            ry="1.5"
            fill="#f5ede0"
            stroke="#d4b89a"
            strokeWidth="0.6"
            opacity="0.7"
          />
        </svg>
      </button>
    </div>
  );
}

function TodoPage({
  todos,
  pageIndex,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  isPageFull,
}) {
  const [inputText, setInputText] = useState("");
  const [shake, setShake] = useState(false);

  const isFull = isPageFull || todos.length >= MAX_TODOS;

  const handleAdd = () => {
    if (isFull) {
      // Shake animation to warn user
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText("");
    }
  };

  return (
    <div className="todo-page">
      <div className="todo-header">
        <span className="todo-icon">≋</span>
        <h2 className="todo-title">TO-DO LIST</h2>
        <span className="todo-emoji">📋</span>
      </div>
      <div className="todo-divider" />

      {/* Add task row — TOP */}
      <div
        className={`todo-add-row ${isFull ? "is-full" : ""} ${shake ? "shake" : ""}`}
      >
        <div className="todo-add-checkbox" />
        <input
          className="todo-add-input"
          type="text"
          placeholder={
            isFull
              ? `🚫 Page full! 🧹 erase a task first`
              : "✏️  Write your task here..."
          }
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          disabled={isFull}
        />
        <button
          className={`todo-add-btn ${isFull ? "btn-full" : ""}`}
          onClick={handleAdd}
        >
          {isFull ? "!" : "+"}
        </button>
      </div>

      {/* Counter */}
      <div className="todo-counter">
        <span className={isFull ? "counter-full" : "counter-normal"}>
          {todos.length}/{MAX_TODOS} tasks
        </span>
        {isFull && <span className="counter-warning"> — page is full!</span>}
      </div>

      <div className="todo-list-divider" />

      {/* Fixed height list — no stretching */}
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
            onEdit={onEditTodo}
          />
        ))}
        {/* Empty lines to fill remaining space */}
        {todos.length < MAX_TODOS &&
          Array.from({ length: MAX_TODOS - todos.length }).map((_, i) => (
            <div key={`empty-${i}`} className="todo-empty-line" />
          ))}
      </div>

      <p className="todo-hint">double-click to edit • hover to erase</p>
    </div>
  );
}

export default TodoPage;

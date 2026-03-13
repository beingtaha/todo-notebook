import React, { useState } from "react";
import TodoPage from "./TodoPage";
import PlannerPage from "./PlannerPage";
import "../styles/NotebookLayout.css";

const MAX_PER_PAGE = 18;

function SpiralBinding() {
  const ringCount = 18;
  return (
    <div className="spiral-binding">
      <div className="spine-bar" />
      <svg className="spiral-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7a6030" />
            <stop offset="20%" stopColor="#c9a84c" />
            <stop offset="42%" stopColor="#f0d888" />
            <stop offset="58%" stopColor="#e0c060" />
            <stop offset="80%" stopColor="#b89040" />
            <stop offset="100%" stopColor="#6a5020" />
          </linearGradient>
          <linearGradient id="ringShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {Array.from({ length: ringCount }, (_, i) => {
          const y = 30 + i * 42;
          return (
            <g key={i}>
              <ellipse
                cx="26"
                cy={y + 4}
                rx="17"
                ry="5"
                fill="rgba(0,0,0,0.2)"
              />
              <ellipse
                cx="26"
                cy={y}
                rx="17"
                ry="7.5"
                fill="none"
                stroke="#5a4010"
                strokeWidth="3.5"
                strokeDasharray="28 26"
                strokeDashoffset="26"
              />
              <ellipse
                cx="26"
                cy={y}
                rx="17"
                ry="7.5"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="4"
                strokeDasharray="28 26"
                strokeDashoffset="0"
              />
              <ellipse
                cx="26"
                cy={y - 2.5}
                rx="13"
                ry="4"
                fill="none"
                stroke="url(#ringShine)"
                strokeWidth="1.5"
                strokeDasharray="20 26"
                strokeDashoffset="0"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function NotebookLayout({
  allTodos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onClose,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("next");

  const pages = [];
  for (
    let i = 0;
    i < Math.max(1, Math.ceil(allTodos.length / MAX_PER_PAGE));
    i++
  ) {
    pages.push(allTodos.slice(i * MAX_PER_PAGE, (i + 1) * MAX_PER_PAGE));
  }

  const totalPages = pages.length;
  const currentTodos = pages[currentPage] || [];
  const isPageFull = currentTodos.length >= MAX_PER_PAGE;
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  const flipPage = (dir) => {
    if (flipping) return;
    setFlipDir(dir);
    setFlipping(true);
    setTimeout(() => {
      setCurrentPage((p) => (dir === "next" ? p + 1 : p - 1));
      setFlipping(false);
    }, 600);
  };

  return (
    <div className="notebook-outer">
      {/* Info bar */}
      <div className="notebook-topbar">
        <div className="topbar-left">
          <span className="topbar-name">Taha Ahmed</span>
          <span className="topbar-divider">|</span>
          <span className="topbar-note">Todo Notebook · Personal Project</span>
        </div>
        <a
          href="https://github.com/beingtaha"
          target="_blank"
          rel="noreferrer"
          className="github-avatar"
          title="Visit GitHub"
        >
          <svg viewBox="0 0 24 24" className="github-icon">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482
              0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462
              -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832
              .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
              -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59
              0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699
              1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
              0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12
              c0-5.523-4.477-10-10-10z"
              fill="currentColor"
            />
          </svg>
          <span className="github-label">beingtaha</span>
        </a>
      </div>

      {/* Page indicator */}
      <div className="page-indicator">
        {!hasPrevPage ? (
          <button className="page-nav-btn close-btn" onClick={onClose}>
            📕 Close Book
          </button>
        ) : (
          <button
            className="page-nav-btn prev-btn"
            onClick={() => flipPage("prev")}
          >
            ← Prev Page
          </button>
        )}
        <span className="page-number-badge">
          Page {currentPage + 1} of {totalPages}
        </span>
        {isPageFull && !hasNextPage && (
          <button
            className="page-nav-btn next-btn new-page"
            onClick={() => flipPage("next")}
          >
            Next Page →
          </button>
        )}
        {hasNextPage && (
          <button
            className="page-nav-btn next-btn"
            onClick={() => flipPage("next")}
          >
            Next Page →
          </button>
        )}
      </div>

      {/* Notebook */}
      <div
        className={`notebook-flip-scene ${flipping ? `flipping-${flipDir}` : ""}`}
      >
        <div className="notebook-wrapper">
          <div className="page-stack page-stack-left">
            <div className="stack-layer s3" />
            <div className="stack-layer s2" />
            <div className="stack-layer s1" />
          </div>
          <div className="notebook">
            <div className="notebook-page left-page">
              <TodoPage
                todos={currentTodos}
                pageIndex={currentPage}
                onAddTodo={onAddTodo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
                isPageFull={isPageFull}
              />
            </div>
            <SpiralBinding />
            <div className="notebook-page right-page">
              <PlannerPage pageIndex={currentPage} />
            </div>
          </div>
          <div className="page-stack page-stack-right">
            <div className="stack-layer s1" />
            <div className="stack-layer s2" />
            <div className="stack-layer s3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotebookLayout;

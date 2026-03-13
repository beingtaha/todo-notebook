import React from "react";
import "../styles/BookCover.css";

function BookCover({ onOpen }) {
  return (
    <div className="cover-scene">
      {/* Desk stationery stays in App, just the book here */}
      <div className="book-closed">
        {/* Back cover */}
        <div className="book-back" />

        {/* Pages stack visible on right side */}
        <div className="book-pages-stack" />

        {/* Front cover */}
        <div className="book-front">
          {/* Cover texture lines */}
          <div className="cover-texture" />

          {/* Logo / branding top */}
          <div className="cover-top-badge">
            <span className="cover-arch">PERSONAL PROJECT</span>
            <span className="cover-internship">React JS · 2026</span>
          </div>

          {/* Main content center */}
          <div className="cover-center">
            {/* Notebook icon */}
            <div className="cover-notebook-icon">
              <svg viewBox="0 0 60 70" width="60" height="70">
                <rect
                  x="8"
                  y="2"
                  width="44"
                  height="60"
                  rx="4"
                  fill="rgba(255,255,255,0.15)"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                />
                <rect
                  x="8"
                  y="2"
                  width="8"
                  height="60"
                  rx="4 0 0 4"
                  fill="rgba(0,0,0,0.15)"
                />
                {[12, 20, 28, 36, 44, 52].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    y1={y}
                    x2="46"
                    y2={y}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1"
                  />
                ))}
                <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="12" cy="22" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="12" cy="32" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="12" cy="42" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="12" cy="52" r="3" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>

            <h1 className="cover-name">Taha Ahmed</h1>
            <div className="cover-divider" />
            <p className="cover-title">Todo & Weekly Planner</p>
            <div className="cover-id-badge">beingtaha.github.io</div>
          </div>

          {/* GitHub bottom */}
          <div className="cover-bottom">
            <a
              href="https://github.com/beingtaha"
              target="_blank"
              rel="noreferrer"
              className="cover-github"
              onClick={(e) => e.stopPropagation()}
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
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
              <span>beingtaha</span>
            </a>

            {/* Open button */}
            <button className="cover-open-btn" onClick={onOpen}>
              Open Notebook
              <svg
                viewBox="0 0 20 20"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Decorative corner */}
          <div className="cover-corner-tl" />
          <div className="cover-corner-br" />
        </div>

        {/* Spine */}
        <div className="book-spine">
          <span className="spine-text">Taha Ahmed · beingtaha.github.io</span>
        </div>
      </div>
    </div>
  );
}

export default BookCover;

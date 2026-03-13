import React, { useState, useEffect } from "react";
import "../styles/PlannerPage.css";

const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
const initialWeekly = DAYS.reduce(
  (acc, d) => ({ ...acc, [d]: ["", "", ""] }),
  {},
);

function DayCard({ day, tasks, onUpdate }) {
  return (
    <div className="day-card">
      <div className="day-name">{day}</div>
      {tasks.map((task, idx) => (
        <div key={idx} className="day-task-row">
          <span className="day-bullet">•</span>
          <input
            className="day-input"
            value={task}
            placeholder={`task ${idx + 1}`}
            onChange={(e) => onUpdate(idx, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

function PlannerPage() {
  const [weekly, setWeekly] = useState(() => {
    const saved = localStorage.getItem("notebook-weekly");
    return saved ? JSON.parse(saved) : initialWeekly;
  });

  useEffect(() => {
    localStorage.setItem("notebook-weekly", JSON.stringify(weekly));
  }, [weekly]);

  const updateTask = (day, idx, value) => {
    setWeekly((prev) => ({
      ...prev,
      [day]: prev[day].map((t, i) => (i === idx ? value : t)),
    }));
  };

  return (
    <div className="planner-page">
      <div className="planner-header">
        <span className="planner-dots">••</span>
        <h2 className="planner-title">WEEKLY PLANNER</h2>
        <span className="planner-dots">••</span>
      </div>
      <div className="planner-divider" />

      <div className="planner-grid">
        {DAYS.map((day) => (
          <DayCard
            key={day}
            day={day}
            tasks={weekly[day]}
            onUpdate={(idx, val) => updateTask(day, idx, val)}
          />
        ))}
      </div>

      <button
        className="planner-clear-btn"
        onClick={() => setWeekly(initialWeekly)}
      >
        clear week
      </button>
    </div>
  );
}

export default PlannerPage;

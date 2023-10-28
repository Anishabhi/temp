import React from 'react';
import './ProgressBar.css';

function ProgressBar({ completedSets, totalSets }) {
  const fillRatio = completedSets / totalSets;

  const progressBarClass = fillRatio === 1 ? 'progress-bar green' : 'progress-bar';

  return (
    <div className={progressBarClass}>
      <div className="progress-status" style={{ width: `${fillRatio * 100}%` }}></div>
    </div>
  );
}

export default ProgressBar;

import React from 'react';
import './ComplianceStatus.css';

const ComplianceStatus = () => {
  const data = {
    completed: 10,
    pending: 5,
    overdue: 2,
  };

  return (
    <div className="compliance-status">
      <h2 className="compliance-title">Compliance Status</h2>
      <ul className="compliance-list">
        <li className="compliance-item"><strong>Completed:</strong> {data.completed}</li>
        <li className="compliance-item"><strong>Pending:</strong> {data.pending}</li>
        <li className="compliance-item"><strong>Overdue:</strong> {data.overdue}</li>
      </ul>
    </div>
  );
};

export default ComplianceStatus;

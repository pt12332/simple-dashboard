import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  const activities = [
    { timestamp: '2023-08-01', action: 'Nau com completed', user: 'Alice' },
    { timestamp: '2023-08-05', action: 'Clean up added', user: 'Bob' },
  ];

  return (
    <div className="recent-activity">
      <h2 className="activity-title">Recent Activity</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <p><strong>Date:</strong> {activity.timestamp}</p>
          <p><strong>Action:</strong> {activity.action}</p>
          <p><strong>User:</strong> {activity.user}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;

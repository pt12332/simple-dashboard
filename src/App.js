import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskOverview from './TaskOverview';
import ComplianceStatus from './ComplianceStatus';
import RecentActivity from './RecentActivity';
import NavBar from './NavBar';
import './App.css';

const Dashboard = () => (
  <div>
    <TaskOverview />
    <ComplianceStatus />
    <RecentActivity />
  </div>
);

const Login = () => (
  <div>
    <h2>Log In</h2>
    {/* Add your log in form here */}
  </div>
);

const Register = () => (
  <div>
    <h2>Register</h2>
    {/* Add your registration form here */}
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

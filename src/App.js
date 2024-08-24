import React from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import InstanceForm from './components/InstanceForm';
import InstanceList from './components/InstanceList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Management System</h1>
      </header>
      <div className="form-section">
        <CourseForm />
        <InstanceForm />
      </div>
      <div className="list-section">
        <CourseList />
        <InstanceList />
      </div>
    </div>
  );
}

export default App;

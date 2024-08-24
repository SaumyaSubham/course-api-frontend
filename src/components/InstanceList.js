import React, { useState } from 'react';
import axios from 'axios';
import './InstanceList.css';

const InstanceList = () => {
  const [instances, setInstances] = useState([]);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [error, setError] = useState(null);

  const fetchInstances = async () => {
    if (!year || !semester) {
      setError('Please select both year and semester');
      return;
    }

    try {
      const response = await axios.get(`/api/instances/${year}/${semester}`);
      setInstances(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching course instances', error);
      setError('Failed to fetch course instances');
    }
  };

  const handleDelete = async (instanceId) => {
    try {
      await axios.delete(`/api/instances/${instanceId}`);
      setInstances(instances.filter(instance => instance.id !== instanceId));
    } catch (error) {
      console.error('Error deleting course instance', error);
      setError('Failed to delete course instance');
    }
  };

  return (
    <div>
      <div className="filter-container">
        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Semester</label>
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">-- Select Semester --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
          <option value="2">5</option>
          <option value="2">6</option>
          <option value="2">7</option>
          <option value="2">8</option>
        </select>
        <button onClick={fetchInstances}>List Instances</button>
      </div>
      {error && <p className="error">{error}</p>}
      <table className="instance-table">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Year-Sem</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
            <tr key={instance.id}>
              <td>{instance.course.title}</td>
              <td>{instance.year}-{instance.semester}</td>
              <td>{instance.custom_course_id}</td>
              <td>
                <button onClick={() => handleDelete(instance.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstanceList;

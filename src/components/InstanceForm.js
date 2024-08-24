import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InstanceForm.css';

const InstanceForm = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [customCourseId, setCustomCourseId] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/instances', {
        course: selectedCourse,
        year,
        semester,
        custom_course_id: customCourseId,
      });
      console.log('Course instance created:', response.data);
      setSelectedCourse('');
      setYear('');
      setSemester('');
      setCustomCourseId('');
      setError(null);
    } catch (error) {
      console.error('Error creating course instance', error);
      setError('Failed to create course instance');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Course</label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">-- Select Course --</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
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
      </div>
      <div>
        <label>Custom Course ID</label>
        <input
          type="text"
          value={customCourseId}
          onChange={(e) => setCustomCourseId(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Add Instance</button>
    </form>
  );
};

export default InstanceForm;

import React, { useState } from 'react';
import axios from 'axios';
import './CourseForm.css'; // We'll add some styles here

const CourseForm = ({ onCourseAdded }) => {
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourse = { title, course_code: courseCode, description };

        try {
            const response = await axios.post('/api/courses/', newCourse);
            onCourseAdded(response.data); // Notify parent component to refresh course list
            setTitle('');
            setCourseCode('');
            setDescription('');
        } catch (error) {
            console.error('There was an error creating the course!', error);
        }
    };

    return (
        <form className="course-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Course Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Course Code</label>
                <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Course Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-submit">Add Course</button>
        </form>
    );
};

export default CourseForm;

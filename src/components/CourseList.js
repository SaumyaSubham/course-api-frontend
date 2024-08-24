import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css'; // We'll add styles here

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses/');
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/courses/${id}/`);
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-list-container">
            <table className="course-list-table">
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.course_code}</td>
                            <td>
                                <button 
                                    className="btn-action view"
                                    onClick={() => console.log('View course', course.id)}
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                                <button 
                                    className="btn-action delete"
                                    onClick={() => handleDelete(course.id)}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;

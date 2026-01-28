import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PostCourseForm = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseEligibility, setCourseEligibility] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const courseData = {
            courseName,
            courseDuration,
            courseEligibility,
        };

        // Normally you'd send this data to a backend API
        console.log('Course Data:', courseData);
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <div className="text-center mb-4">
                        <h3 className="font-weight-bold">Post New Course</h3>
                        <p className="text-muted">Fill in the details below to add a new course.</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                        {/* Course Name */}
                        <Form.Group controlId="courseName">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter course name"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Course Duration */}
                        <Form.Group controlId="courseDuration">
                            <Form.Label>Course Duration</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter course duration"
                                value={courseDuration}
                                onChange={(e) => setCourseDuration(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Course Eligibility */}
                        <Form.Group controlId="courseEligibility">
                            <Form.Label>Course Eligibility</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter course eligibility criteria"
                                value={courseEligibility}
                                onChange={(e) => setCourseEligibility(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="primary" type="submit" className="w-100">
                            Post Course
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PostCourseForm;

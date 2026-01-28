import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PostJobForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle job posting logic (e.g., send data to the backend)
        console.log('Job posted:', { jobTitle, description, salary });
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <div className="text-center mb-4">
                        <h3 className="font-weight-bold">Post a New Job</h3>
                        <p className="text-muted">Fill in the details below to post a new job.</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                        {/* Job Title */}
                        <Form.Group controlId="jobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter job title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Job Description */}
                        <Form.Group controlId="description">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter job description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Salary */}
                        <Form.Group controlId="salary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                className="mb-3"
                                required
                            />
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Post Job
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PostJobForm;

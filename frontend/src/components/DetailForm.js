import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DetailForm = ({ extractedData }) => {
    const [education, setEducation] = useState('');
    const [income, setIncome] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            ...extractedData,
            education,
            income,
            skills,
        };

        // Send form data to backend for processing
        fetch('http://localhost:5000/submit-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Form submitted successfully', data);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="text-center mb-4">
                        <h2>Additional Information</h2>
                    </div>

                    {/* Display Extracted Data */}
                    <div className="mb-4">
                        <p><strong>Name:</strong> {extractedData.name}</p>
                        <p><strong>Aadhaar Number:</strong> {extractedData.aadhaar_number}</p>
                    </div>

                    {/* Form to collect additional information */}
                    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                        <Form.Group controlId="education">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your education"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="income" className="mt-3">
                            <Form.Label>Income</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your income"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="skills" className="mt-3">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your skills"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="mt-4 w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailForm;

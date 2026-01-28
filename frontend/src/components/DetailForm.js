import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DetailForm = ({ extractedData }) => {
    // State hooks for the additional fields
    const [name, setName] = useState(extractedData.name);
    const [aadhar, setAadhar] = useState(extractedData.aadhaar_number);
    const [year, setYear] = useState(extractedData.year);
    const [gender, setGender] = useState(extractedData.gender);

    // New state variables for additional fields
    const [currentGrade, setCurrentGrade] = useState(''); 
    const [age, setAge] = useState(''); 
    const [area, setArea] = useState(''); 
    const [highSchoolBoard, setHighSchoolBoard] = useState(''); 
    const [gpaLastClass, setGpaLastClass] = useState('');
    const [hasJob, setHasJob] = useState('');
    const [estimatedAnnualIncome, setEstimatedAnnualIncome] = useState('');
    const [receivedTraining, setReceivedTraining] = useState('');
    const [successProbabilityScore, setSuccessProbabilityScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine extracted data with the additional fields
        const formData = {
            ...extractedData,  // Include Aadhaar number, gender, name, and year
            currentGrade,
            age,
            area,
            highSchoolBoard,
            gpaLastClass,
            hasJob,
            estimatedAnnualIncome,
            receivedTraining,
            successProbabilityScore,
        };

        // Send the data to the backend for processing
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

                    {/* Form to collect additional information */}
                    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="aadhar">
                            <Form.Label>Aadhar</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your aadhar"
                                value={aadhar}
                                onChange={(e) => setAadhar(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* New fields with select dropdown */}
                        <Form.Group controlId="currentGrade" className="mt-3">
                            <Form.Label>Current Grade</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your current grade"
                                value={currentGrade}
                                onChange={(e) => setCurrentGrade(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="age" className="mt-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="area" className="mt-3">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                as="select"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                required
                            >
                                <option value="">Select Area</option>
                                <option value="Rural">Rural</option>
                                <option value="Urban">Urban</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="highSchoolBoard" className="mt-3">
                            <Form.Label>High School Board</Form.Label>
                            <Form.Control
                                as="select"
                                value={highSchoolBoard}
                                onChange={(e) => setHighSchoolBoard(e.target.value)}
                                required
                            >
                                <option value="">Select Board</option>
                                <option value="State">State</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gpaLastClass" className="mt-3">
                            <Form.Label>GPA in Last Class</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your GPA"
                                value={gpaLastClass}
                                onChange={(e) => setGpaLastClass(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="hasJob" className="mt-3">
                            <Form.Label>Do you have a job?</Form.Label>
                            <Form.Control
                                as="select"
                                value={hasJob}
                                onChange={(e) => setHasJob(e.target.value)}
                                required
                            >
                                <option value="">Select Yes or No</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="estimatedAnnualIncome" className="mt-3">
                            <Form.Label>Estimated Annual Income</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your estimated annual income"
                                value={estimatedAnnualIncome}
                                onChange={(e) => setEstimatedAnnualIncome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="receivedTraining" className="mt-3">
                            <Form.Label>Have you received any training?</Form.Label>
                            <Form.Control
                                as="select"
                                value={receivedTraining}
                                onChange={(e) => setReceivedTraining(e.target.value)}
                                required
                            >
                                <option value="">Select Yes or No</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="successProbabilityScore" className="mt-3">
                            <Form.Label>Success Probability Score</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your success probability score"
                                value={successProbabilityScore}
                                onChange={(e) => setSuccessProbabilityScore(e.target.value)}
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

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaUserPlus, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for routing

const HomePage = () => {
    const totalActiveStudents = 1500;
    const totalNewStudents = 200;
    const totalPlacedStudents = 1200;

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">MagicBus Dashboard Overview</h2>

            <Row className="justify-content-center">
                {/* Total Active Students Card */}
                <Col sm={12} md={4} lg={3} className="mb-4">
                    <Card className="shadow rounded border-light p-3">
                        <Card.Body className="text-center">
                            <div className="d-flex justify-content-center mb-3">
                                <FaUsers size={40} color="#007bff" />
                            </div>
                            <h4 className="text-muted">Total Active Students</h4>
                            <h2 className="font-weight-bold">{totalActiveStudents}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Total New Student Entries Card */}
                <Col sm={12} md={4} lg={3} className="mb-4">
                    <Card className="shadow rounded border-light p-3">
                        <Card.Body className="text-center">
                            <div className="d-flex justify-content-center mb-3">
                                <FaUserPlus size={40} color="#28a745" />
                            </div>
                            <h4 className="text-muted">Total New Students</h4>
                            <h2 className="font-weight-bold">{totalNewStudents}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Total Placed Students Card */}
                <Col sm={12} md={4} lg={3} className="mb-4">
                    <Card className="shadow rounded border-light p-3">
                        <Card.Body className="text-center">
                            <div className="d-flex justify-content-center mb-3">
                                <FaClipboardCheck size={40} color="#ffc107" />
                            </div>
                            <h4 className="text-muted">Total Placed Students</h4>
                            <h2 className="font-weight-bold">{totalPlacedStudents}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Link to Placed Students Details Page */}
            <div className="text-center mt-4">
                <Link to="/placed-students">
                    <Button variant="info">Get All Placed Students Details</Button>
                </Link>
            </div>
        </Container>
    );
};

export default HomePage;

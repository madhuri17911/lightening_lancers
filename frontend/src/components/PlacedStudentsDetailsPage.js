import React from 'react';
import { Container, Table } from 'react-bootstrap';

const PlacedStudentsDetailsPage = () => {
    // Dummy data for placed students
    const placedStudents = [
        { name: 'John Doe', company: 'XYZ Corp', placementDate: '2025-01-15' },
        { name: 'Jane Smith', company: 'ABC Ltd', placementDate: '2025-02-20' },
        { name: 'Mark Johnson', company: 'Tech Solutions', placementDate: '2025-03-10' },
        { name: 'Emily Davis', company: 'Web Co.', placementDate: '2025-04-05' },
        { name: 'David Wilson', company: 'Innovate Tech', placementDate: '2025-05-12' },
        { name: 'Sophia Lee', company: 'Next Gen Solutions', placementDate: '2025-06-07' },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Placed Students Details</h2>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Company Name</th>
                    <th>Placement Date</th>
                </tr>
                </thead>
                <tbody>
                {placedStudents.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.company}</td>
                        <td>{student.placementDate}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PlacedStudentsDetailsPage;

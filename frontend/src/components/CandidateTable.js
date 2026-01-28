import React from 'react';
import { Table, Container } from 'react-bootstrap';

const CandidateTable = () => {
    // Sample candidate data for testing
    const dummyData = [
        { id: 1, name: 'John Doe', qualification: 'Graduate', income: '120000', score: 4 },
        { id: 2, name: 'Priya Sharma', qualification: '12th Pass', income: '80000', score: 3 },
        { id: 3, name: 'Raj Kumar', qualification: 'Post Graduate', income: '150000', score: 5 },
        { id: 4, name: 'Anita Verma', qualification: 'Graduate', income: '100000', score: 4 },
        { id: 5, name: 'Amit Patel', qualification: 'Diploma', income: '70000', score: 2 },
        { id: 6, name: 'Sneha Gupta', qualification: 'Post Graduate', income: '130000', score: 5 },
        { id: 7, name: 'Ravi Mehta', qualification: 'Graduate', income: '90000', score: 3 },
        { id: 8, name: 'Neha Rani', qualification: '12th Pass', income: '60000', score: 1 },
        { id: 9, name: 'Vijay Singh', qualification: 'Post Graduate', income: '180000', score: 5 },
        { id: 10, name: 'Pooja Joshi', qualification: 'Graduate', income: '110000', score: 4 }
    ];

    return (
        <Container className="mt-4">
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Highest Qualification</th>
                    <th>Annual Income</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {dummyData.map((candidate) => (
                    <tr key={candidate.id}>
                        <td>{candidate.id}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.qualification}</td>
                        <td>{candidate.income}</td>
                        <td>{candidate.score}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CandidateTable;

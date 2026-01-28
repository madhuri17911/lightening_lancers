import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UploadForm = ({ onNext }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Send file to backend for extraction
            fetch('http://localhost:5000/extract', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Extracted data:', data);
                    if (data.name && data.aadhaar_number) {
                        onNext(data);  // Proceed to next page with the extracted data
                    } else {
                        console.log('No data extracted');
                    }
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                });
        } else {
            console.log('No file selected');
        }
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="text-center mb-4">
                        <h2>Upload Your Document</h2>
                    </div>

                    {/* Form for file upload */}
                    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                        <Form.Control
                            type="file"
                            onChange={handleFileChange}
                            accept="image/jpeg, image/png, image/jpg"
                            required
                            className="mb-3"
                        />

                        <Button type="submit" variant="primary" className="w-100">
                            Upload
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UploadForm;

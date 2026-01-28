import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/magic-bus-logo.png'; // Ensure correct path for logo

const TopNavbar = ({ onMenuClick }) => {
    return (
        <Navbar bg="info" variant="light" expand="lg" className="py-3">
            <Container>
                {/* Logo and Brand Name */}
                <Navbar.Brand href="#">
                    <img
                        src={logo}  // Ensure this path is correct
                        alt="MagicBus Logo"
                        width="50"
                        height="50"
                        className="me-2"
                    />
                    <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>MagicBus</span>
                </Navbar.Brand>

                {/* Navbar toggle for mobile view */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Collapse (Dropdown on mobile) */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {/* Home Button */}
                        <Nav.Link
                            onClick={() => onMenuClick('home')}  // Clicking this will trigger the 'home' page
                            style={styles.navLink}
                        >
                            Home
                        </Nav.Link>

                        {/* Get Eligible Candidates Button */}
                        <Nav.Link
                            onClick={() => onMenuClick('candidates')}  // Clicking this will trigger the candidates page
                            style={styles.navLink}
                        >
                            Get Eligible Candidates
                        </Nav.Link>

                        {/* Post New Job Button */}
                        <Nav.Link
                            onClick={() => onMenuClick('post-job')}  // Clicking this will trigger the 'Post Job' form
                            style={styles.navLink}
                        >
                            Post New Job
                        </Nav.Link>

                        {/* Post New Course Button */}
                        <Nav.Link
                            onClick={() => onMenuClick('post-course')}  // Clicking this will trigger the 'Post Course' form
                            style={styles.navLink}
                        >
                            Post New Course
                        </Nav.Link>

                        {/* Add New User Entry Button */}
                        <Nav.Link
                            onClick={() => onMenuClick('add-user')}  // Clicking this will trigger 'Add New User Entry' page
                            style={styles.navLink}
                        >
                            Add New User Entry
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// Inline styles to customize navbar appearance
const styles = {
    navLink: {
        fontWeight: 'bold',      // Make text bold
        fontSize: '1.1rem',      // Increase font size
        color: '#fff',           // White color for the text
        margin: '0 15px',        // Spacing between the links
        textTransform: 'uppercase',  // Make the text uppercase
        transition: 'all 0.3s ease',  // Smooth transition for hover effect
        padding: '10px 15px',    // Add some padding for better clickability
    },
};

export default TopNavbar;

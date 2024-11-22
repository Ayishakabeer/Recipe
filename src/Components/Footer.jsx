import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  
  return (
    <>
      <footer className="bg-light text-center text-lg-start border-top mt-4">
            <Container className="py-4">
                <Row>
                    {/* About Section */}
                    <Col md={4}>
                        <h5 className="fw-bold text-primary">About Us</h5>
                        <p className="text-muted">
                            My Recipe Hub is your go-to platform for discovering delicious recipes from around the world. Cook, share, and enjoy!
                        </p>
                    </Col>

                    {/* Page Links */}
                    <Col md={4}>
                        <h5 className="fw-bold text-primary">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-muted text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/view" className="text-muted text-decoration-none">
                                    Recipes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted text-decoration-none">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Social Media */}
                    <Col md={4}>
                        <h5 className="fw-bold text-primary">Follow Us</h5>
                        <div>
                            <a
                                href="https://facebook.com"
                                className="text-muted me-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-muted me-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-muted"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="bg-primary text-white text-center py-2">
                © 2024 My Recipe Hub. All Rights Reserved.
            </div>
        </footer>
    </>
  )
}

export default Footer
import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div>
            
            <section
                className="hero-section d-flex align-items-center"
                style={{
                    backgroundColor: "#f9f5f0",
                    height: "100vh",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        {/* Text  */}
                        <Col md={6} className="text-center text-md-start">
                            <h1 className="fw-bold display-4 text-primary">
                                Discover the Joy of Food! 🍴
                            </h1>
                            <p className="fs-5 mt-3">
                                From the freshest ingredients to the most delightful recipes, food is a celebration of life. Let us take you on a journey of flavors that will tickle your taste buds and bring smiles to the faces you love.
                            </p>
                              <Link to={'/view'}><Button
                                  variant="primary"
                                  size="lg"
                                  className="mt-3"
                              >
                                  Explore Recipes
                              </Button></Link>
                        </Col>

                        {/*  Food Image */}
                        <Col md={6} className="text-center">
                            <div className="hover-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
                                    alt=" food"
                                    className="img-fluid rounded shadow hover-image"
                                    style={{ maxHeight: "450px" }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    </>
  )
}

export default Home
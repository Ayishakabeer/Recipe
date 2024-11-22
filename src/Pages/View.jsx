import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/slice/recipeSlice";
import './view.css';

const View = () => {

  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6; 

  const dispatch = useDispatch();
  const { allRecipes, loading, error } = useSelector((state) => state.recipesReducer);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container className="py-5">
        {loading && <p>Loading recipes...</p>}
        {error && <p className="text-danger">{error}</p>}

        <Row className="justify-content-center">
          {currentRecipes?.map((recipe) => (
            <Col md={6} lg={4} key={recipe?.id} className="mb-4">
              <Card className="recipe-card shadow-sm" onClick={() => handleShow(recipe)}>
                <Card.Img variant="top" src={recipe?.image} alt={recipe?.name} />
                <Card.Body>
                  <Card.Title className="text-center text-primary fw-bold">{recipe?.name}</Card.Title>
                  <Card.Text className="text-center text-muted">{recipe?.cuisine}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({ length: Math.ceil(allRecipes.length / recipesPerPage) }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "primary" : "outline-primary"}
              className="mx-1"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <Modal
          show={show}
          onHide={handleClose}
          size="lg" 
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <img
                  src={selectedRecipe?.image}
                  alt={selectedRecipe?.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "400px", objectFit: "cover" }} 
                />
                <h5 className="text-center mt-2 text-danger">{selectedRecipe?.cuisine}</h5>

              </Col>
              <Col md={6}>
                <h5>Ingredients:</h5>
                <ul className="Ingredients text-warning">
                  {selectedRecipe?.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h5>Instructions: </h5>
                <p className="instructions text-justify">{selectedRecipe?.instructions}</p>
                <div className="d-flex justify-content-center text-danger">Calories Per Serving: {selectedRecipe?.caloriesPerServing} </div>
                <div className="d-flex justify-content-between mt-2">
                  <p className="Ingredients">Prepration Time: {selectedRecipe?.prepTimeMinutes} Minutes</p>
                  <p className="Ingredients">Cooking Time: {selectedRecipe?.cookTimeMinutes} Minutes</p>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
    </>
  );
};

export default View;

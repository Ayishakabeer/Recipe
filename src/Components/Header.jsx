import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { searchRecipe } from "../redux/slice/recipeSlice";

const Header = () => {
  
  const dispatch =useDispatch()

  const location = useLocation(); 

  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-primary">
          🍴 My Recipe Hub
        </Navbar.Brand>
        
        {location.pathname === "/view" && (
            <div className="justify-content-center ms-5">
                <input
                    style={{width:'400px'}} 
                    onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} 
                    className='rounded p-1 form-control' 
                    type="text" 
                    placeholder='Search Cuisines here!'
                />
            </div>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/view">Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

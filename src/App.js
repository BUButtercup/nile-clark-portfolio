import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './App.css';
import Avatar from './asset/images/avatar_nile.png'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from "./components/Projects";

function App() {

    return (
        <Container fluid className="app-box pb-5">
                <Navbar className="" expand="lg" fixed="top">
                    <Container fluid className="nav-cont">
                        <Navbar.Brand href="/">
                            <h1 className="Header-top">
                                Nile Clark
                                <div className="Header-avatar">
                                    <img src={Avatar} />
                                </div>
                            </h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto Header-nav">
                                <NavLink exact className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                } to="/">About Me</NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                } to="/portfolio">Projects</NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                } to="/contact">Contact Me</NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                } to="/resume">Resume</NavLink>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <div className="col-12 d-none d-lg-flex Header-bi1">

                    <h2 className="Header-top">Est 2021</h2>

                </div> */}
    

                <Routes>
                    <Route path="/portfolio" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/" element={<AboutMe />} />
                </Routes>

           
           
            <Navbar className="foot" fixed="bottom">
                <Nav className="col-12 d-flex justify-content-center p-3">
                    <Nav.Item>
                        <Nav.Link className="Footer-a" href="https://github.com/BUButtercup" target="_blank">GitHub</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="Footer-a" href="https://medium.com/" target="_blank">Medium</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="Footer-a" href="https://codepen.io/N-Crocodile" target="_blank">CodePen</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar>
           

        </Container>
    );
}

export default App;

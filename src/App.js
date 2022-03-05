import { BrowserRouter as Router, Switch, NavLink, Routes, Route, Link } from "react-router-dom";
// import Footer from './components/Footer';
// import Header from './components/Header'
import './App.css';
import Avatar from './asset/images/avatar_nile.png'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
              <header>
            <div className="Header">
                <h1 className="Header-top">
                    Nile Clark
                    <div className="Header-avatar">
                        <img src={Avatar}/>
                    </div>
                </h1>
                <div className="Header-navig">
                    <nav className="Header-nav">
                        <NavLink className="Header-a" activeClassName="clicked" to="/">About Me</NavLink>
                        <NavLink className="Header-a" activeClassName="clicked" to="/portfolio">Projects</NavLink>
                        <NavLink className="Header-a" activeClassName="clicked" to="/contact">Contact Me</NavLink>
                        <NavLink className="Header-a" activeClassName="clicked" to="/resume">Resume</NavLink>
                    </nav>
                </div>
            </div>
            <div className="Header-bi1">
            
                    <h2 className="Header-top">Professional Portfolio</h2>
             
            </div>
        </header>
        <main>
        {/* <Switch> */}
        <Routes>
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe/>} />
        </Routes>
        {/* </Switch> */}
        </main>
        <footer>
            {/* <h1 className="sb-mobile">Contact Me</h1> */}

            <nav className="Footer-nav">
                <a href="tel:+1-360-809-3790" className="Footer-a">Call</a>
                <a href="mailto:andyandnile@gmail.com" className="Footer-a">Email</a>
                <a href="https://github.com/BUButtercup" className="Footer-a">GitHub</a>
                <a href="https://medium.com/" className="Footer-a">Medium</a>
                <a href="https://codepen.io/N-Crocodile" className="Footer-a">CodePen</a>
            </nav>
        </footer> 

    </div>
  );
}

export default App;

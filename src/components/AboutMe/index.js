import { Row } from 'react-bootstrap'
import './style.css'

const AboutMe = () => {

    return (

        <section className="container-fluid col-10 col-sm-9 h-100 mb-5">
            <Row className= "d-flex justify-content-center">
                <h1 className="col-10 col-lg-3 d-flex  justify-content-lg-end justify-content-center sb">About Me</h1>
                <div className=" col-12 col-lg-7 AM-p text-center">
                    <p >I am a junior full-stack developer seeking an exciting new position where continuous learning is encouraged, and I'll be working with a dynamic, engaged, and supportive team to either create new projects or revamp existing ones.</p>
                    <p> I am pivoting from a 15-year career as a nurse to seek a role where I can employ both logic and creativity to solve problems for the user. I love efficiency and innovation. My background in nursing helped me to develop my ability to work with a team, organize projects, and apply critical thinking to solve problems, but I am happy to be jumping into a field where I can use logic in conjunction with creativity!</p>
                </div>
            </Row>
        </section>


)}

export default AboutMe;
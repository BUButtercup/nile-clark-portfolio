import './style.css'
import {Card, Button} from 'react-bootstrap'

const Resume = () => {


    return (
        <section className="resume-box">
            <h1 className="sb">My Resume</h1>
            <div className="resume-body">
                <Card style={{ width: '90%',marginBottom: "10vh"}}>
                    <Card.Body>
                        <a href="https://drive.google.com/uc?id=1YvAmR3XxfZ3PQdYeg1BPcNuuO345kF1C&export=download"><Button>Download</Button></a>
                        <hr></hr>
                        <Card.Title style={{marginBottom: "15px"}}>Technical Skills</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            <ul>
                                <li>Frontend: HTML5, CSS, JQuery, Javascript, Bootstrap, ReactJS, Handlebars</li>
                                <li>Backend: MySQL, Sequelize, MongoDB, Mongoose, Node, Express</li>
                            </ul>
                        </Card.Text>
                        <hr></hr>
                        <Card.Title style={{marginBottom: "15px"}}>Education</Card.Title>
                        <Card.Subtitle className="mb-2">Full Stack Coding Bootcamp, University of Washington (Seattle, WA)</Card.Subtitle>
                        <Card.Text style={{marginBottom: "15px"}}>
                        <ul>
                            <li>Completed: March, 2022
                            </li>
                            <li>Obtained: Full Stack Development Certificate</li>
                        </ul>
                        </Card.Text>
                        <Card.Subtitle className="mb-2">Pacific Lutheran University (Tacoma, WA)	</Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Graduated: December, 2006</li>
                                <li>Obtained: Bachelor of Science - Nursing, Minor in Spanish</li>
                            </ul>
                        </Card.Text>
                        <hr></hr>
                        <Card.Title style={{marginBottom: "15px"}}>Work Experience</Card.Title>
                        <Card.Subtitle className="mb-2" style={{display: "flex", justifyContent: "space-between"}}><span>Virginia Mason Medical Center (Seattle, WA)</span><span>07/2020– 04/2021</span></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><em>Professional Development Specialist RN – Surgical & Perioperative Services</em></Card.Subtitle>
                        <Card.Text style={{marginBottom: "15px"}}>
                        <ul>
                            <li>Designed, implemented, and ran the Periop101 RN Residency Program for new-to-the-OR nurses.</li>
                            <li>Overhauled and maintained the Surgical Services intranet site.</li>
                            <li>Coordinated current RN and support staff training and education.</li>
                        </ul>
                        </Card.Text>
                        <Card.Subtitle className="mb-2">University of Washington Medical Center	 - Operating Room (Seattle, WA)</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><em>RN - Main Operating Room	</em></Card.Subtitle>
                        <Card.Text>
                        <ul>
                            <li>Voluntarily trained and performed in multiple diverse roles.</li>
                            <li>Enthusiastic volunteer to help mentor / train new staff and students.</li>
                            <li>A valued team member, both collaborative and independent problem solver.</li>
                            <li>Achieved multiple professional certifications.</li>
                        </ul>
                        </Card.Text>
                        <hr></hr>
                        
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </div>

        </section>)

}

export default Resume;
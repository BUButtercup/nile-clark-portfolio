import {Form, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

const Contact = () => {

// TODO: logic to validate email address
// TODO: logic to validate other fields and pop up notices if they are left unfilled/block sending
/// TODO: hook up email

    return (
    
        <div>

            <div className="contact-box">
                <div className="Footer-title"><h1 className="sb" id="sb5">Contact Me</h1></div>
                <Form className='contact-form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="First and Last" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <p>Drop me a line if you'd like to talk about work! Please give me the details of your project. I'd love to discuss it with you!</p>
                    <Button >Send Message</Button>
                </Form>
                
            </div>
        </div>)

}

export default Contact;
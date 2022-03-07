import {useState, useRef} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import{ init, sendForm } from '@emailjs/browser';
import './style.css'

const Contact = () => {
    const [usernameShow, setUsernameShow] = useState('none');
    const [emailShow, setEmailShow] = useState('none');
    const [messageShow, setMessageShow] = useState('none');


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const validateEmail = e => {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailShow('inline')
        }
    }

    const handleInput = e => {
        const {name, value} = e.target
        if(name === 'user_name'){
            setUsername(value)
        }
        if (name === 'user_email'){
            setEmail(value)
        } 
        if(name==='message'){setMessage(value)}
    }

    const sendMessage = (e) => {
        e.preventDefault();
        if(!username){ 
            setUsernameShow('inline')}
        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailShow('inline')}
        if (!message) {
            setMessageShow('inline');}
        }
        if (username && email && message){
        // these IDs from the previous steps
        sendForm('service_680yvon', 'contact_form', form.current, 'MtWifyBg-nF8ZrO1m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
   
    };
// TODO: logic to validate email address
// TODO: logic to validate other fields and pop up notices if they are left unfilled/block sending

    return (
    
        <div>

            <div className="contact-box">
                <div className="Footer-title"><h1 className="sb" id="sb5">Contact Me</h1></div>
                <Form className='contact-form' ref={form} onSubmit={sendMessage}>
                    <Form.Group className="mb-3" >
                        <div className="form-alert-box">
                            <Form.Label>Full Name</Form.Label>
                            <p className="form-alert" style={{display: `${usernameShow}`}}>This field is required. Please provide both your first and last names.</p>
                        </div>
                        <Form.Control type="text" name="user_name" placeholder="First and Last" value={username} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <div className="form-alert-box">
                            <Form.Label>Email Address</Form.Label>
                            <p className="form-alert" style={{display: `${emailShow}`}}>This field is required. Please provide a valid email.</p>
                        </div>
                        <Form.Control type="email" name="user_email" value={email} onChange={handleInput} onBlur={validateEmail} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <div className="form-alert-box">
                            <Form.Label>Message</Form.Label>
                            <p className="form-alert" style={{display: `${messageShow}`}}>This field is required. Please enter your message.</p>
                        </div>
                        <Form.Control as="textarea" name="message" value={message} onChange={handleInput} rows={5} />
                    </Form.Group>
                    <p>Drop me a line if you'd like to talk about work! Please give me the details about what you're looking for. I'd love to discuss it with you!</p>
                    <Button type="submit" value="Send" >Send Message</Button>
                </Form>
                
            </div>

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Your message has been sent.</p>
                    <Button variant="secondary">Close</Button>
                </Modal.Body>
            </Modal.Dialog>

        </div>)

}

export default Contact;
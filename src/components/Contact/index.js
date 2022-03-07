import {useState, useRef} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import{ sendForm } from '@emailjs/browser';
import './style.css'
import ContactModal from '../ContactModal'

const Contact = () => {
    const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID} = process.env;

    const [usernameShow, setUsernameShow] = useState('none');
    const [emailShow, setEmailShow] = useState('none');
    const [messageShow, setMessageShow] = useState('none');


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const [openModal, setOpenModal] = useState(false)

    const validateEmail = e => {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailShow('inline')
        }
    }

    const handleInput = e => {
        e.preventDefault();
        const {name, value} = e.target
        if(name === 'user_name'){
            setUsername(value)
        }
        if (name === 'user_email'){
            setEmail(value)
        } 
        if(name==='message'){
            setMessage(value)
        e.stopPropagation()}
    }

    const sendMessage = e => {
        e.preventDefault();
        if(!username){ 
            setUsernameShow('inline')
            return
        }
        if (!email){
            setEmailShow('inline')
            return
        }
        if (!message) {
            setMessageShow('inline')
            return
        }
        if (username && email && message && validateEmail()){
        sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            if(result.text==='OK'){
                setOpenModal(true)
                setUsername('');
                setEmail('');
                setMessage('');
            }
        }, (error) => {
            console.log(error.text);
        });
        }
    };

    const handleClose = e => {
        e.preventDefault();
        setOpenModal(false);
    }

    return (
    
        <div>

            <ContactModal show={openModal} onHide={handleClose}/>
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
                        <Form.Control type="email" name="user_email" value={email} onChange={handleInput} onBlur={()=>validateEmail()} placeholder="name@example.com" />
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



        </div>)

}

export default Contact;
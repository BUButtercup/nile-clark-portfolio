import {Modal, Button} from 'react-bootstrap'
import './style.css'

const ContactModal = (props) => {



    return (

                   <Modal 
                   {...props}
                   backdrop="static"
                   centered
                   animation={false}>
                   <Modal.Dialog className="contact-modal">
                        <Modal.Header>
                            <h1>Success!</h1>
                        </Modal.Header>
        
                        <Modal.Body>
                            <h3>Your message has been sent.</h3>
                            <Button variant="secondary" onClick={props.onHide}>Close</Button>
                        </Modal.Body>
                    </Modal.Dialog>
                    </Modal>
    )
}

export default ContactModal;
import './style.css'
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const ProjModal = (props) => {

  console.log('props', props)

    return(
<div>
<Modal

      {...props}
      size="lg"
      aria-labelledby="contained-modal-title"
      // centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title">
   */}
          <h1 style={{backgroundColor: "transparent", color:"var(--dark", fontWeight: "bold"}}>{props.image.title}</h1>
          <h5 style={{backgroundColor:"transparent", fontStyle: "italic"}}>{props.image.languages}</h5>
        {/* </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="img-box">
        {props.image.url ? props.image.url.map(url=><div className="img-card"><img alt={props.image.title} src={url} style={{width: "300px", height: "250px"}}></img></div>) : null}
        </div>
     
        <p>
          {props.image.description}
        </p>
        <a href={props.image.github} target="_blank">GitHub</a>
        {props.image.deployed ? <a href={props.image.deployed} target="_blank">Deployed App</a> : <p style={{fontStyle: 'italic', backgroundColor: "transparent"}}>This project is not deployed. Please visit the GitHub link to learn more about it.</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default ProjModal;
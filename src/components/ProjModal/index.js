import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const ProjModal = (props) => {

  console.log('props', props)

    return(
<div>
<style type="text/css">
      {`
      .modal-dialog {
        box-shadow: 5px 5px 15px slategray;
        background-color: whitesmoke;
        height: 60%;
        margin-top: 15vh;
      }
      .modal-header {
        background-color: var(--light);
        text-align: center;
        flex-direction: column;
      }
      .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
      }
      .modal-body a {
        text-decoration: none;
        margin: 0 15px;
        font-size: 1.25em;
        font-weight: bold;
        color: var(--dark);
        background-color: transparent;
        border-bottom: 2px solid var(--dark);
      }
      .modal-body a:hover,
      .modal-body a:active {
          box-shadow: inset 0px 0px 10px 1px magenta;
      }
      
      .modal-body a:visited {
          text-decoration: none;
          color: var(--dark);
      }
      .modal-body img {
        border: 5px solid var(--light)
      }
      .modal-body .img-card{
        padding: 5px;
        background-color: var(--dark);
        margin: 10px;
      }
      .modal-body .img-box {
        display: flex;
        background-color: transparent;
      }
      .modal-body p {
        text-align: center;
        background-color: transparent;
      }
      .btn {
        background-color: var(--dark);
        color: var(--light);
        font-weight: bold;
      }
      .modal-footer {
        background-color: var(--light);
      }
    `}
</style>
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
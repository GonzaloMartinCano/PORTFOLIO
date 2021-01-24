import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import projectsList from './../../data/projectList'
import GitHubIcon from '@material-ui/icons/GitHub';
import img1 from './../../img/Uptoyou_portada.png'
import img2 from './../../img/Cub3d_portada.png'
import img3 from './../../img/Bizzdash_portada.png'
import img4 from './../../img/Shinobi.png'

import "./Projects.css";
import Spinner from "./../spinner/Spinner"

const Projects = () => {
  const [showy, setShowy] = useState(false);

  const handleClose = () => setShowy(false);
  const handleShow = (index) => setShowy(index);

  
  const projectslist = projectsList
  const projectImages = [img1, img2, img3, img4] 


  
  return (
    <>
    <Container>
        <Row className="listprojects">
          
          {

            projectslist.map( (elm, index) => 

            <Col md={6} lg={5} key={index} >
              <Card className="project_card">
                  <div className="project_img">
                    {projectslist[index].img ? <img src={projectImages[index]} alt="project_img" /> : <Spinner/>}
                  </div>
                  <h1>{elm.name}</h1>
                <p>{elm.title}</p>
                <Button variant="outline-info" size="sm" className="card-button" onClick={() => handleShow(index)}>
                  Details
              </Button>
              </Card>
            </Col>
              )
          }

      </Row>
      </Container>
      
     

    <Modal
      show={showy !== false ? true : false}
      onHide={handleClose}
      backdrop="static"
        keyboard={false}
        size="lg"
        className="modal"
    >
      <Modal.Header closeButton      >
          <Modal.Title style={{ weight: "900" }}><h1>{projectslist[Number(showy)].name}</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className="embedResponsive embedResponsive21by9">
            <iframe title={showy} className="video" src={projectslist[Number(showy)].video}></iframe>
            <p style={{fontSize: "0.5rem"}}>*Recommend: change the resolution in the video options to see it clearly</p>
        </div>
          <hr />
          <p>{projectslist[Number(showy)].description}</p>
          
        <Link to={{ pathname: projectslist[Number(showy)].link }} target="_blank" ><GitHubIcon style={{ fontSize: 40}}/></Link>

        <div className=" languages_img">

          <img src={projectsList[Number(showy)].languages} alt="languages_img"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
          </Modal>
    </>

  );
};

export default Projects;

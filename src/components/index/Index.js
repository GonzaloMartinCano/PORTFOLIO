import React, { Component } from "react"
import { Link } from 'react-router-dom';

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Fade } from "react-awesome-reveal";

import skills from "./../../img/brain2.png"
import projects from "./../../img/proyectos.png"

import "./Index.css";

export default class Index extends Component {
  render() {
    return (
      <Fade>
      <Row className="index">
          <Col xs={5} md={4} className="skills-img order-1 order-md-0">
            <Link to="/PORTFOLIO/resume">
              <img style={{ width: "60.5%" }} src={skills} alt="skills_img"/>
              <h1>See my skills</h1>
            </Link>
        </Col>
        <Col xs={9} md={4} className="profile-info order-0 order-md-1">
          <div className="profile-img">
            <img src="https://drive.google.com/file/d/1NoJaoCCiQukkEi7BDFs3PhvsnF2D1cSn/preview" alt="profile_img"/>
          </div>
          <Card className="mycard ">
            <h1>Gonzalo Martín Cano</h1>
            <br/>
            <h2>FULL STACK DEVELOPER</h2>
            <br/>
            <p>"If I can develop, I can fly"</p>
          </Card>
        </Col>

          <Col xs={5} md={4} className="skills-img order-2 order-md-2">
            <Link to="/PORTFOLIO/projects">
              <img style={{width: "100%"}} src={projects} alt="projects_img" />
              <h1>See my projects</h1>
            </Link>
        </Col>
        </Row>
    </Fade>
    );
  }
}

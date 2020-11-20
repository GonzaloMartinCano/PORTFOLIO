import React, { Component } from "react"
import { Link } from 'react-router-dom';

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Fade } from "react-awesome-reveal";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <Fade>
      <Row className="index">

        <Col xs={9} md={4} className="profile-info order-0 order-md-1">
          <div className="profile-img">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGwHQirvTBv9w/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=XFJKez042YbiVKDwmyzHrC7zcpWr8gZsiU1BwSU9dDs" alt="profile_img"/>
          </div>
          <Card className="mycard ">
            <h1>Gonzalo Martín Cano</h1>
            <br/>
            <h2>FULL STACK DEVELOPER</h2>
            <br/>
              <p>
                You cand send me an email to:
              <br /> <br />
                <a href="mailto:gmcano85@gmail.com?subject=Contact through portfolio" style={{ color: 'white' }}>gmcano85@gmail.com</a>
              <br /> <br />
                Or find me on my Social Networks: 
              </p>
              <div className="icons">
                <Link to={{ pathname: "https://github.com/gonzalomartincano" }} target="_blank"><GitHubIcon style={{ fontSize: 50 }}/></Link>
                <Link to={{pathname: "https://www.linkedin.com/in/gonzalomartincano/"}} target="_blank"> <LinkedInIcon style={{ fontSize: 50 }}/> </Link>
              </div>
          </Card>
        </Col>

         
        </Row>
    </Fade>
    );
  }
}

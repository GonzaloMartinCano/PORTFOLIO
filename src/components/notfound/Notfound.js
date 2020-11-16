import React, { Component } from "react"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './Notfound.css'


export default class Notfound extends Component {
  render() {
    return (
     
      <Row className="index">

        <Col md={12} className="notfound" >
          <div className="profile-img">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGwHQirvTBv9w/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=XFJKez042YbiVKDwmyzHrC7zcpWr8gZsiU1BwSU9dDs"  alt="profile_img" />
          </div>
          <Card className="mycardnotfound" >
            <h1>Gonzalo Martín Cano</h1>
            <br/>
            <h2>FULL STACK DEVELOPER</h2>
            <br/>
                    <p style={{ color: 'red' }}>THIS PAGE DOES NOT EXIST</p>
                    <p style={{color: 'red'}}>Please, try with the top options</p>
          </Card>
            </Col>
            </Row>


    );
  }
}

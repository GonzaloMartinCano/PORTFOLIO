import React, { Component } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Fade } from "react-awesome-reveal"
import './Skills.scss'



export default class Skills extends Component {
    render() {
        return (
           
            <Fade transitionDuration={3000}>
            <Row className="skills">
                
                <Col xs={10} md={5} >
                    <Card className="table hard-skills-data hvr-grow">
                        <h1>Hard Skills</h1>
                        <hr />
                        
                        <h4> HTML, CSS3 & Responsive Web Design</h4>

                        <h4> Fundamentals of Object-oriented programming based on JavaScript</h4>
                        <h4> Git + Github & Version Control</h4>
                        <h4> Web Development Frameworks(Express-backend, React-frontend)</h4>
                        <h4> Relational databases and ODMs</h4>
                        <h4> Integration of 3rd party services (APIs)</h4>
                        <h4> Write clean, modular and efficient code and develop well-tested applications usig TDD principies</h4>
                        <h4> Servers & Hosting</h4>
                            <h4> Agile Tools and methodologies</h4>
                   
                    </Card>
                    <Card  xs={10} md={5} className="table hvr-grow">
                        <h1>Academic Training</h1>
                        <hr />
                        <h3>IRONHACK</h3>
                        <h4> WEB Full Stack Bootcamp 2020</h4>
                        <h3>42 Madrid, Fundación Telefónica</h3>
                        <h4>Computer programming (2019-Act)</h4>

                    </Card>
                </Col>
                {/* <Col md={1}  >
                    <img src={skills}/>
                </Col> */}
                <Col xs={10} md={5} >
                    <Card  className="table soft-skills-data hvr-grow">
                        <h1>Soft Skills</h1>
                        <hr/>

                        <h4>
                            Thanks to my training and professional career I have acquired great skills in <strong>dealing with clients</strong> and colleagues,
                            I have learned to <strong>work as a team</strong>, and also to <strong>set limits and make my own decisions</strong>.
                            For a long time I have <strong>trained workers</strong>, which has helped me know how to <strong>learn every day </strong> 
                            and to be very methodical.
                            Personally, I am a <strong>proactive person</strong>, I love innovative projects with social purposes. That was one of the reasons
                            for which I decided to undertake and carry out some projects by myself, <strong>overcoming frustrations</strong> which has given me a point of view
                            different and an extra experience in my career.
                        </h4>
                    </Card>
                    <Card xs={10} md={5} className="table hvr-grow">
                        <h1>Experience</h1>
                        <hr />
                        
                        <h4>2 years like entrepeneur and freelance trainer.</h4>
                        <h4>7 years like advisor for large & medium companies.</h4>
                        <h4>4 years in a Health & Safety Dpt. in differents companies.</h4>
                   </Card>
                </Col>
                </Row>
                </Fade>

            

        )
    }
}

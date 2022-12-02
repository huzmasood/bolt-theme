import React from "react";
import { Container, Col, Tabs, Tab, Row } from 'react-bootstrap';
import graph from '../../images/graph.png';
import icongrid from '../../images/icon-grid.png';
import iconmsg from '../../images/icon-message.png';
import './Section.css';

const tabData = [
    {
        tab: "Project Management",
        h1: <h1 className="heading-trio text-white" style={{fontSize: '58px'}}>
                Best features
                <br />
                for your project
                <br />
                management.
            </h1>
    },
    {
        tab: "Task Management",
        h1: <h1 className="heading-trio text-white" style={{fontSize: '58px'}}>
                Manage your
                <br />
                tasks easily with
                <br />
                Bolt.
            </h1>
    },
    {
        tab: "Dark Mode",
        h1: <h1 className="heading-trio text-white" style={{fontSize: '58px'}}>
                Make Schedules
                <br />
                for Any Meeting
                <br />
                on Calendar.
            </h1>
    }
]

function Section() {    
    return (
        <div className="purple-container">
            <Container className="d-flex flex-column align-items-center mb-5 mt-4">
                <Tabs defaultActiveKey="Project Management"
                        id="uncontrolled-tab-example"
                        className="d-flex justify-content-between"
                        style={{marginBottom: '130px', width: '60%'}}>
                    {tabData.map((data, i) => {
                        return (
                            <Tab key={ i } eventKey={ data.tab } title={ data.tab }>
                                <Row>
                                <Col xxl={6} xs={12} className="me-3">
                                    <div>
                                        <img className="img" alt="content" src={ graph } />
                                    </div>
                                </Col>
                                <Col xxl={5} xs={12}>
                                    { data.h1 }
                                    <div className="mt-5">
                                        <div className="d-flex">
                                            <div className="p-3 mt-3 d-flex justify-content-center align-items-center circles c1">
                                                <img alt="icon" style={{position:'relative', zIndex:'1'}} src={ icongrid } />
                                            </div>
                                            <div>
                                                <h3 className="text-white mb-3" style={{fontSize: '21px'}}>Manage Smartly</h3>
                                                <p className="p">Stay on top of your task lists and stay <br /> in touch with what's happening</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-3 mt-3 d-flex justify-content-center align-items-center circles c2">
                                                <img alt="icon" src={ iconmsg } />
                                            </div>
                                            <div>
                                                <h3 className="text-white mb-3" style={{fontSize: '21px'}}>Communicate Fast</h3>
                                                <p className="p">Stay on top of your task lists and stay <br /> in touch with what's happening</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                </Row>
                            </Tab>
                        )
                    })}
                </Tabs>
            </Container>
        </div>
    );
}

export default Section;
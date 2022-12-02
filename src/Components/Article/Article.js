import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import './Article.css';

const p = <div>
            <p className='statement mt-4 pt-2 mb-4' style={{fontSize: '18px', lineHeight: '30px'}}>
                Create custom landing pages with Bolt
                <br />
                that converts more visitors than any
                <br />
                website. Easy, Reliable & Fast.
            </p>
            <div className='gslink-center'>
                <a href="#gs" className="gs-link">Get Started Now</a>
            </div>
        </div>

function Article({ upper }) {
    if (upper) {
        var contentLeft = <div>
                            <h1 className='heading' style={{fontSize: '58px'}}>
                                The intelligent
                                <br />
                                way to manage
                                <br />
                                any project.
                            </h1>
                            { p }
                        </div>
        var imgRight = <div className='ms-5'>
                            <img alt='content' className="img" src={ img2 } />
                        </div>
        var imgLeft = null
        var contentRight = null
    } else {
        contentLeft = null
        imgRight = null
        imgLeft = <img alt='content' className='img l-img' src={ img3 } />
        contentRight = <div className='r-content' style={{marginLeft: '220px'}}>
                            <h1 className='heading' style={{fontSize: '58px'}}>
                                Connect with
                                <br />
                                team members
                                <br />
                                with ease.
                            </h1>
                            { p }
                        </div>
    }

    return (
        <div style={{marginBottom: '140px', marginTop: '130px'}}>
            <Container>
                <Row>
                    <Col lg={5} xs={12}>
                        { contentLeft }
                        { imgLeft }
                    </Col>
                    <Col lg={7} xs={12}>
                        { contentRight }
                        { imgRight }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Article;
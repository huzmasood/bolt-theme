import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DownloadApp.css';

function DownloadApp() {
    return (
        <div style={{marginTop: '275px', marginBottom: '200px'}}>
            <Container className='bluefoot' style={{backgroundColor: 'rgb(83, 56, 252)', borderRadius: '1rem'}}>
                <Row>
                    <Col sm={5} xs={4} className='gs-width' style={{paddingTop: '80px'}}>
                        <h2 className="text-white gs-heading" style={{fontSize: '48px', paddingLeft: '70px', letterSpacing: '-2px'}}>
                            Get started by
                            <br />
                            downloading apps.
                        </h2>
                    </Col>
                    <Col className="download-btn text-end">
                        <button className="px-5 py-3 button2" style={{borderRadius: '9999px'}}>Download App</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DownloadApp;
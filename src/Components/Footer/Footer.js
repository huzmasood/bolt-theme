import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../images/logo.png";
import paygate from "../../images/payment-gatway.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const footerItems = ['About us', 'Privacy Policy', 'Terms & Conditions', 'Faq', 'Contact'];
const footerItems2 = [
    {
        icon: faMapMarkerAlt,
        content: <span className="grey-color">
                    Amsterdam
                    <br />
                    Netherlands
                </span>
    },
    {
        icon: faPhoneAlt,
        content: <span className="grey-color">
                    +31 62 19 22 705
                    <br />
                    7 Days - 8am - 10pm
                </span>
    },
    {
        icon: faEnvelope,
        content: <span className="grey-color">
                    info@medcartel.com
                </span>
    }
];
const socialMedia = ['Facebook', 'Twitter', 'Instagram']

function Footer() {
    return (
        <div>
            <Container>
                <Row className="mb-5">
                    <Col lg={3} xs={12}>
                        <div style={{marginBottom: '38px'}}>
                            <img alt="logo" src={ logo } />
                        </div>
                        <p className="statement" style={{fontSize: '16px', lineHeight: '30px', textAlign: 'start'}}>
                            We're the digital agency to create
                            <br />
                            your digital presence for better
                            <br />
                            conversion and sales.
                        </p>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="footer-nav" style={{paddingLeft: '65px'}}>Company</div>
                        <ul className="ul">
                            {footerItems.map((item, i) => {
                                return (
                                    <li key={ i } className="pb-3 mb-1">
                                        <a className="f-link" href={`#${item}`}>{ item }</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="footer-nav" style={{paddingLeft: '65px'}}>Contact Details</div>
                        <ul className="ul">
                            {footerItems2.map((item, i) => {
                                return (
                                    <li key={ i } className="pb-3">
                                        <FontAwesomeIcon icon={ item.icon } className='icon me-2' />
                                        { item.content }
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col lg={3} xs={12}>
                        <div className="footer-nav">Follow us on social media</div>
                        <p style={{color: 'rgba(37, 55, 63, 0.7)', lineHeight: '28px'}}>
                            Get the latest trends updates right at your inbox.
                        </p>
                        <ul className="ul d-flex justify-content-around w-75" style={{padding: '11px 0px 15px', color: 'rgb(37, 55, 63)', fontSize: '15px'}}>
                            {socialMedia.map((name, i) => {
                                return (
                                    <li key={ i }>
                                        { name }
                                    </li>
                                )
                            })}
                        </ul>
                        <hr style={{opacity: '0.15', width: '95%'}} />
                        <img alt="content" className="pv4" src={ paygate } />
                    </Col>
                </Row>
                <hr style={{opacity: '0.1'}} />
                <div className="pt-2 pb-4 d-flex justify-content-center footer">
                    © 2021 Bolt By FinestDevs. All Rights Reserved
                </div>
            </Container>
        </div>
    );
}

export default Footer;
import React, { useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import img1 from '../../images/img1.png';
import './Hero.css';

function Hero() {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!count && localStorage.count) setCount(Number(localStorage.count));
        localStorage.count = count
    }, [count])

    const onButtonClick = () => {
        if (input.includes('@')) {
            setCount(count + 1);
            setInput('')
        } else {
            alert('Please enter a valid email')
        }
    }

    return (
        <div className='mt-5 pt-5'>
            <Container className='d-flex justify-content-center'>
                <Col xl={8} lg={11} xs={12}>
                    <h1 className='heading text-center'>
                        The intelligent way to manage projects.
                    </h1>
                    <p className='text-center statement py-4'>
                        Create custom landing pages with Bolt that
                        <br />
                        converts more visitors than any website.
                    </p>
                    <div className="d-flex justify-content-center pb-4">
                        <div className="border p-2 d-flex justify-content-between email">
                            <input type="text" 
                                    className="border border-white ms-4 iput"
                                    placeholder="@ Enter your email"
                                    value={ input }
                                    onChange={ (e) => setInput(e.target.value) } />
                            <button className="m-0 px-4 py-3 button"
                                    style={{borderRadius: '9999px'}}
                                    onClick={ onButtonClick }>
                                Start Now!
                            </button>
                        </div>
                    </div>
                    <div className='text-center mb-5'>{ count }</div>
                    <div className='d-flex justify-content-center mb-2'>
                        <img className="img" alt='content' src={ img1 } />
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Hero;
import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Step2 = props => {

    const history = useHistory();
    const goToPage3 = () => {
        history.push("/step3");
    }

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Rumit')


    useEffect(() => {
        console.log(`1st useEffact Hi ${name} you clicked ${count} times`)
    });

    useEffect(() => {
        console.log(`2nd useEffact ${name} you clicked ${count} times`)
    }, []);

    useEffect(() => {
        console.log(`3rd ${name} you clicked ${count} times`)
    }, [name]);

    useEffect(() => {
        console.log(`4th ${name} you clicked ${count} times`)
    }, [count, name]);


    useEffect(() => {
        const handleResize = () => {
            console.log('resize stuff')
        }
        window.addEventListener('resize', handleResize)
        return () => {
            console.log('clean resize Listener')
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useEffect</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row style={{ height: 300 }}>
                <Col>
                    <Button variant="secondary" onClick={() => { setCount(count + 1) }} >change counter value </Button>
                    <br /><br />
                    <Button variant="secondary" onClick={() => { setName(name === 'Rumit' ? 'Dhwanil' : 'Rumit') }} >change Name </Button>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className='text-center'>
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage3() }}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Step2;
import React, { useReducer } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
};

const Step8 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (

        <Container fluid >
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useReducer</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row>
                <Col>{count}</Col>
            </Row>
            <Row>
                <Col md={1}><Button variant="secondary" onClick={() => dispatch('increment')}>increment</Button></Col>
                <Col md={1}><Button variant="secondary" onClick={() => dispatch('decrement')}>decrement</Button></Col>
                <Col md={1}><Button variant="secondary" onClick={() => dispatch('reset')}>reset</Button></Col>
            </Row>
            <Row>
                {/* <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage6() }}>Next</Button>
                </Col> */}
            </Row>
        </Container>
    );
};

export default Step8;
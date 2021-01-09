import React, { useRef } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import CheckCout from '../components/checkCout';
import UpdateCount from '../components/updateCount';

function Step5() {

    const history = useHistory();
    const goToPage6 = () => {
        history.push("/step6");
    }
    const ref = useRef();

    return (
        <Container fluid >
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useImperativeHandle</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row>
                <Col><UpdateCount ref={ref} /></Col>
            </Row>
            <Row className='mt-5'>
                <Col><CheckCout ref={ref} /></Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage6() }}>Next</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Step5
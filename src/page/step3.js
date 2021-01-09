import React, { createContext } from 'react';
import DisplayMessageOfcontext from '../components/displayMessageOfcontext';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import DisplayMessage from '../components/displayMessage';

export const MessageContext = createContext();

const Step3 = () => {
    const history = useHistory();
    const goToPage4 = () => {
        history.push("/step4");
    }

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useContext</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row style={{ height: 300 }}>

                {/* <DisplayMessage message="Hii... How are you doing?" ></DisplayMessage> */}

                <MessageContext.Provider value="Hii... How are you doing?">
                    <div>
                        <DisplayMessageOfcontext ></DisplayMessageOfcontext>
                    </div>
                </MessageContext.Provider>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage4() }}>Next</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default Step3;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Step1 = props => {

    const history = useHistory();
    const goToPage2 = () => {
        history.push("/step2");
    }

    const [inputValue, setInputValue] = useState()

    // const result = useState("");
    // result[0]  => inputvalue  => stateProp
    // result[1] => setInputValue  => method

    const inputChange = (event) => {
        setInputValue(event.target.value);
    }


    const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '' });

    const handleContactInfoChanged = (event) => {
       
        // const value = event.target.value;
       // const name = event.target.name;
        
        let {value,name} = event.target;
        setContactInfo({
            ...contactInfo,
            [name]: value
        });
    }

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useState</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row style={{ height: 300 }}>

                <Col>
                    <input type='text'
                        name="firstName"
                        placeholder='please enter firstName'
                        onChange={(e) => handleContactInfoChanged(e)}
                        value={contactInfo.firstName}></input>
                    <p>{contactInfo.firstName}</p>
                </Col>
                <Col>
                    <input type='text'
                        name="lastName"
                        placeholder='please enter lastName'
                        onChange={(e) => handleContactInfoChanged(e)}
                        value={contactInfo.lastName}></input>
                    <p>{contactInfo.lastName}</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className='text-center'>
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage2() }}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Step1;

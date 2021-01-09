import React, { useState, useCallback } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const functionsCounter = new Set()
function Step6() {

    const [count, setCount] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    const history = useHistory();
    const goToPage7 = () => {
        history.push("/step7");
    }

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const incrementOtherCounter = () => {
        setOtherCounter(otherCounter + 1)
    }

    /*
        const increment = useCallback(() => {
            setCount(count + 1)
        }, [count])
    
        console.log(increment);
        const decrement = useCallback(() => {
            setCount(count - 1)
        }, [count])
        const incrementOtherCounter = useCallback(() => {
            setOtherCounter(otherCounter + 1)
        }, [otherCounter])
    */

    functionsCounter.add(increment)
    functionsCounter.add(decrement)
    functionsCounter.add(incrementOtherCounter)

    console.log(`functionsCounter = ${functionsCounter.size}`)

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useCallback</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row>
                Count: {count}
            </Row>

            <Row className="mt-3">
                <Button variant="secondary" onClick={increment}>increment</Button>
            </Row>

            <Row className="mt-3">
                <Button variant="secondary" onClick={decrement}>decrement</Button>
            </Row>

            <Row className="mt-3">
                <Button variant="secondary" onClick={incrementOtherCounter}>incrementOtherCounter</Button>
            </Row>

            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage7() }}>Next</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Step6

import React, { useState, useCallback, useMemo } from 'react'
import MemoChildComponent from '../components/memoChildComponent';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Step7() {
    const history = useHistory();
    const goToPage8 = () => {
        history.push("/step8");
    }

    const [callbackCount, setCallbackCount] = useState(0);
    const [memoCount, setMemoCount] = useState(0);

    const memoFunction = () => {
        console.log(memoCount, "memo called");
        // Do something that will take a lot of processing ...
    };

    // Here if we give an empty array of dependencies, the callback function will return the old value of callbackCount
    // because useCallback will return its memoized version
    const callbackFunction = useCallback(() => {
        console.log(callbackCount, "callback called");
        // Do something with callbackCount ...
        return callbackCount;
    }, [callbackCount]);


    useMemo(memoFunction, [memoCount]);

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useMemo</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row>
                <MemoChildComponent action={callbackFunction} memoValue={memoCount} />
            </Row>

            <Row className="mt-3">
                {/* Change the callback hook dependency to trigger a change in the child */}
                <Button variant="secondary" onClick={() => setCallbackCount(callbackCount + 1)}>
                    Change callback count
            </Button>
            </Row>

            <Row className="mt-3">
                {/* After creating useMemo, each change of memoCount will trigger the function passed to the hook,
               otherwise the memoized value will be returned */}
                <Button variant="secondary" onClick={() => setMemoCount(memoCount + 1)}>
                    Change memo count
            </Button>
            </Row>
            { <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage8() }}>Next</Button>
                </Col>
            </Row>
            }
        </Container >
    )
}

import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Col, Row, Container, Button } from 'react-bootstrap';

function Step4() {

    const history = useHistory();
    const goToPage5 = () => {
        history.push("/step5");
    }
    const divRef = useRef(null)
    const [backColor, setBackColor] = useState('#fff');

    useEffect(() => {
        const onScroll = () => {
            const div = divRef.current
            const { y } = div.getBoundingClientRect()
            if (y <= 0) {
                setBackColor('#ff6666')
            } else {
                setBackColor('#fff')
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            console.log('clean resize Listener')
            window.removeEventListener('scroll', onScroll)
        }
    })

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="text-center">
                        <h1>useRefs</h1>
                    </div>
                </Col>
            </Row>
            <div className="line" ></div>
            <Row>
                <div ref={divRef} style={{ height: '200vh', color: '#000', padding: 15, background: backColor }}>
                    <p><h1> Triggering imperative animations</h1></p>
                    <p>Scroll to turn background red.</p>
                </div>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center" >
                    <Button id='btnNext' className='mt-5' variant="secondary"
                        onClick={() => { goToPage5() }}>Next</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Step4

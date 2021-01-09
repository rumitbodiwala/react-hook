import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default function MemoChildComponent({ action, memoValue }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        let val = action()
        setValue(val)
    }, [action])

    return (
        <>
            <Container fluid>
                <Row><Col> Child : callback count {value}</Col></Row>
                <Row><Col>Child : Memo Count {memoValue}</Col></Row>
            </Container>
        </>
    )
}

import React, { useContext } from 'react';
import { MessageContext } from "../page/step3";
import { Row,Col } from 'react-bootstrap';

// const DisplayMessageOfcontext = props => {
//     return (
//         <MessageContext.Consumer>
//             {value => <div style={{ height: 60, background: '#fff', color: '#000', marginLeft: 20 }}> message : {value} </div>}
//         </MessageContext.Consumer>
//     );
// };


const DisplayMessageOfcontext = props => {
    const messageValue = useContext(MessageContext);
    return (
        <Row style={{ height: 60, background: '#fff', color: '#000', marginLeft: 20 }}>
            <Col>Message: {messageValue}</Col>
        </Row>
    );
};

export default DisplayMessageOfcontext;
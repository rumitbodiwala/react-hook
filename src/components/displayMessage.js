import React, { useState } from 'react';


const DisplayMessage = (props) => {

    const [message, setMessage] = useState("initialState")

    return (
        <div style={{ height: 60, background: '#fff', color: '#000', marginLeft: 20 }}>
            props.message
        </div>
    );
};

export default DisplayMessage;
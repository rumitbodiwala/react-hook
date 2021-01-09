
import { forwardRef } from "react";
import { Button } from 'react-bootstrap';

const CheckCout = forwardRef((props, ref) => {
    const checkCount = () => console.log(`checkCount component=> ${ref.current.count}`);

    return (
        <>
            <Button variant="secondary" onClick={checkCount}> check Count</Button>
        </>
    );
});


export default CheckCout;
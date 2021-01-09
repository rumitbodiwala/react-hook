import { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from 'react-bootstrap';

const UpdateCount = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        count,
    }));

    const updateCount = () => {
        setCount((c) => c + 1);
        console.log(`update count component => ${count + 1}`);
    };

    return <Button variant="secondary" onClick={updateCount}>Increment</Button>;
});

export default UpdateCount;
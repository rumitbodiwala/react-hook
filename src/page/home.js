import React from 'react';
import logo from '../react-hooks.png';
import Button from 'react-bootstrap/Button';

import { useHistory } from "react-router-dom";
const Home = props => {

    const history = useHistory();
    const goToStep1 = () => {
        history.push("/step1");
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                <Button id='btnNext' className='mt-5' variant="secondary"
                    onClick={() => { goToStep1() }}>Next</Button>
            </header>

        </div>
    );
};

export default Home;
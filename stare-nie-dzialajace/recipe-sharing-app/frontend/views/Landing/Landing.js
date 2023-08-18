import React, { useState, useEffect } from 'react';
import './Landing.css';

import { Loader, Button } from '@ui5/webcomponents-react/';
import { Wrapper } from '../Components';
import handleLoading from '../../helpers/pageLoading';

const Landing = () => {
    const [loading, setLoading] = useState(true);

    const clicked = () => {
        alert('Welcome to Recipe Sharing App!');
    };

    useEffect(() => {
        handleLoading(setLoading);
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <Wrapper>
                    <div className='box'>
                        <h1 className="pageTitle">Welcome to Recipe Sharing App!</h1>
                    </div>
                    
                    <div className='box'>
                        <Button onClick={clicked}>Get Started</Button>
                    </div>
                </Wrapper>
            }
        </>
    );
};

export default Landing;

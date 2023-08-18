import './Landing.css';

import { Loader, Button } from '@ui5/webcomponents-react/'
import React, { useState, useEffect } from 'react';

import { Wrapper } from '../Components';
import handleLoading from '../../helpers/pageLoading';

const Landing = () => {
    const [loading, setLoading] = useState(true)

    const clicked = () => {
        alert('clicked!')
    }

    useEffect(() => {
        handleLoading(setLoading)
    }, [])

    return (
        <>
            {loading ? <Loader /> :
                <Wrapper>

                    <div className='box'>
                        <h1 className="pageTitle">Some title</h1>
                    </div>
                    
                    <div className='box'>
                        <Button onClick={clicked}>Click Me</Button>
                    </div>

                </Wrapper>
            }
        </>
    )
}
export default Landing;
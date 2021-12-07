/*eslint-disable*/
import React from 'react';
import { history } from '../../routes';
import Particle from '../Particle';

const ErrorPage = () => {

    const onPage = () => {
        history.push('/');
        window.scrollTo(0, 0);
    }

    return (
        <div className="errorpage">
            <div className='particles-main'>
                <Particle color='#28a4d9' number='500' direction='top' />
            </div>
            <div>
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    We can't find the page you are looking for. <br /> Sorry for the inconvenience.
                </p>
            </div>
            <div align="center">
                <a className="btn-back" onClick={onPage}>Back to  Homepage</a>
            </div>
        </div>
    )
}

export default ErrorPage;







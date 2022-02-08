/*eslint-disable*/
import React from 'react';
import { history } from '../../routes';
import Particle from '../Particle';

const ErrorPage = ({ error }) => {

    const onPage = () => {
        history.push('/');
        window.scrollTo(0, 0);
    }

    return (
        <div className="errorpage">
            <div className='particles-error'>
                <Particle color='#28a4d9' number='500' direction='top' />
            </div>
            <div className="center">
                <div className={!error ? 'error ' : 'error top'}>
                    {!error && <div className="number">4</div>}
                    <div className="illustration">
                        <div className="circle"></div>
                        <div className="clip">
                            <div className="paper">
                                <div className="face">
                                    <div className="eyes">
                                        <div className="eye eye-left"></div>
                                        <div className="eye eye-right"></div>
                                    </div>
                                    <div className="rosyCheeks rosyCheeks-left"></div>
                                    <div className="rosyCheeks rosyCheeks-right"></div>
                                    <div className="mouth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!error && <div className="number">4</div>}
                </div>
                <div>
                    <p className="title">Oh no!!</p>
                    {!error ? <p className="subtitle">
                        We can't find the page you are looking for. <br /> Sorry for the inconvenience.
                    </p> : <p className="subtitle">
                        We can't find the products you are looking for. <br /> Sorry for the inconvenience.
                    </p>}
                </div>
                <div align="center">
                    <a className="btn-back" onClick={onPage}>Back to  Homepage</a>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;







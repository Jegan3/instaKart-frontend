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
            <p className="title">Oh no!!</p>
            <p className="subtitle">
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                <a className="btn-back" onClick={onPage}>Back to  Homepage</a>
            </div>
        </div>
    )
}
export default ErrorPage;







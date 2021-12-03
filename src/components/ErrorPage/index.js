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
            {/* <div className='particles-main'>
          <Particle color='#28a4d9' number='700' direction='top' />
        </div> */}
            <div className="mars"></div>
            <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
            <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
            <p className="title">Oh no!!</p>
            <p className="subtitle">
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                <a className="btn-back" onClick={onPage}>Back to  Homepage</a>
                <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
                <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
            </div>
        </div>
    )
}
export default ErrorPage;







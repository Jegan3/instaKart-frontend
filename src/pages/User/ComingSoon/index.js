/*eslint-disable*/
import React from 'react';
import Header from '../../../components/Header';
import Particles from "react-particles-js";
import Typical from "react-typical";
import Footer from '../../../components/Footer';

const ComingSoon = () => {

  const toHome = () => {
    history.push({ pathname: '/' });
  };

  return (
    <div className='comingsoon'
    >
      <div>
        <Header />
      </div>
      <div className=" soon">
        <div className="page-text">
          <Typical
            steps={['We are currently working on something awesome.', 1000, 'Stay tuned!', 500]}
            loop={Infinity}
            wrapper="p" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ComingSoon;
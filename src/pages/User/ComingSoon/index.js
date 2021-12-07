/*eslint-disable*/
import React from 'react';
import Header from '../../../components/Header';
import Particle from '../../../components/Particle';
import Typical from "react-typical";
import Footer from '../../../components/Footer';

const ComingSoon = () => {

  return (
    <div className="comingsoon">
      <div className='particles-main'>
        <Particle color='#28a4d9' number='500' direction='top' />
      </div>
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
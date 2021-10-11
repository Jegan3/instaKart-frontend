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
      <div className="blob">
        <svg
          className="blob-inner"
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
        >
          <path fill="url(#paint)">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="5s"
              values="M364.504 0.00131368C416.594 0.168265 466.139 20.1059 512.391 44.0676C557.895 67.642 602.302 96.1253 631.434 138.289C659.943 179.551 664.767 231.184 675.519 280.171C686.2 328.838 699.684 376.947 694.692 426.522C689.39 479.177 679.959 535.064 645.785 575.472C611.738 615.729 556.092 627.656 507.429 647.946C460.761 667.403 415.021 690.642 364.504 692.748C313.131 694.889 261.064 684.352 215.724 660.104C171.077 636.226 142.122 593.131 108.11 555.626C72.2421 516.076 25.1071 483.213 9.10745 432.275C-7.10404 380.663 -0.388863 322.784 19.1253 272.328C37.8438 223.929 83.0317 193.02 116.859 153.669C149.559 115.629 173.536 69.5665 216.159 43.1182C260.47 15.6227 312.356 -0.165822 364.504 0.00131368Z;
          M332 0.500017C384.091 0.666969 433.248 15.5383 479.5 39.5C525.005 63.0744 601.369 82.3364 630.5 124.5C659.009 165.762 634.815 216.013 645.567 265C656.247 313.667 644.058 369.701 639.067 419.275C633.765 471.931 650.501 499.092 616.326 539.5C582.28 579.757 545.947 600.711 497.284 621C450.616 640.457 417.41 678.395 366.893 680.5C315.52 682.641 234.734 673.749 189.393 649.5C144.746 625.623 135.765 553.505 101.752 516C65.8847 476.45 29.4999 470.213 13.5002 419.275C-2.71131 367.663 -6.01387 315.456 13.5002 265C32.2188 216.601 67.9245 195.852 101.752 156.5C134.452 118.461 131.877 52.4483 174.5 26C218.811 -1.49547 279.852 0.332881 332 0.500017Z;
          M364.504 0.00131368C416.594 0.168265 466.139 20.1059 512.391 44.0676C557.895 67.642 602.302 96.1253 631.434 138.289C659.943 179.551 664.767 231.184 675.519 280.171C686.2 328.838 699.684 376.947 694.692 426.522C689.39 479.177 679.959 535.064 645.785 575.472C611.738 615.729 556.092 627.656 507.429 647.946C460.761 667.403 415.021 690.642 364.504 692.748C313.131 694.889 261.064 684.352 215.724 660.104C171.077 636.226 142.122 593.131 108.11 555.626C72.2421 516.076 25.1071 483.213 9.10745 432.275C-7.10404 380.663 -0.388863 322.784 19.1253 272.328C37.8438 223.929 83.0317 193.02 116.859 153.669C149.559 115.629 173.536 69.5665 216.159 43.1182C260.47 15.6227 312.356 -0.165822 364.504 0.00131368Z"
            />
          </path>
          <defs>
            <linearGradient id="paint" gradientUnits="userSpaceOnUse">
              <stop offset="62%" stopColor="#ff0066" />
              <stop offset="1" stopColor="#c01360" stopOpacity="0.97" />
            </linearGradient>
          </defs>
        </svg>
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
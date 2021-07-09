/*eslint-disable*/
import React from 'react';
import Particles from 'react-particles-js';

const Particle = () =>
  <Particles
    params={{
      particles: {
        color: {
          value: '#28a4d9',
        },
        number: {
          value: '700',
          density: {
            enable: false,
          }
        },
        line_linked: {
          enable: false
        },
        size: {
          value: '3',
          random: true,
          anim: {
            speed: ' 4',
            size_min: '0.3',
          }
        },
        move: {
          random: true,
          speed: '1',
          direction: 'top',
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          // onhover: {
          //   enable: false,
          //   mode: 'bubble',
          // },
          onclick: {
            enable: true,
            mode: 'repulse',
          }
        },
        modes: {
          bubble: {
            distance: '250',
            duration: '2',
            size: '0',
            opacity: ' 0'
          },
          repulse: {
            distance: '400',
            duration: '4'
          }
        }
      }
    }} />

export default Particle;



/*eslint-disable*/
import React from 'react';
import Particles from 'react-particles-js';

const Particle = ({ color, number, direction }) => 

<Particles
    params={{
	    "particles": {
        "color": {
          "value": `${color}`,
        },
	        "number": {
	            "value": `${number}`,
	            "density": {
	                "enable": false,
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 3,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": `${direction}`,
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            // "onhover": {
	            //     "enable": true,
	            //     "mode": "bubble"
	            // },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 100,
	                "duration": 4
	            }
	        }
	    }
	}} />

export default Particle;


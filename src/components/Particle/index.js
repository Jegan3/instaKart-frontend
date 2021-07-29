/*eslint-disable*/
import React from 'react';
// import Particles from 'react-tsparticles';
import Particles from "react-particles-js";

const Particle = ({ color, number, direction }) => 

<Particles
    params={{
	    "particles": {
        "color": {  "value":`${color}`},
	        "number": {
	            "value": `${number}`,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
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
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />



//   <Particles
//   options={{
//     fps_limit: 60,
//     interactivity: {
//       // detect_on: "canvas",
//       events: {
//         onclick: { enable: true, mode: "repulse" },
//         // onhover: {
//         //   enable: true,
//         //   mode: "bubble",
//         //   parallax: { enable: false, force: 2, smooth: 10 }
//         // },
//         resize: true
//       },
//       modes: {
//         bubble: { distance: 100, duration: 0.3, opacity: 0, size: 0, speed: 3 },
//         // grab: { distance: 400, line_linked: { opacity: 0.5 } },
//         // push: { particles_nb: 4 },
//         // remove: { particles_nb: 2 },
//         repulse: { distance: 300, duration: 0.4 }
//       }
//     },
//     particles: {
//       color: {  value:`${color}`},
//       line_linked: {
//         // color: "#ffffff",
//         // distance: 500,
//         enable: false,
//         // opacity: 0.4,
//         // width: 2
//       },
//       move: {
//         attract: { enable: false, rotateX: 600, rotateY: 1200 },
//         bounce: false,
//         direction: `${direction}`,
//         enable: true,
//         out_mode: "out",
//         random: false,
//         size: true,
//         speed: 1,
//         straight: false
//       },
//       number: { density: { enable: true, value_area: 800 }, value: `${number}` },
//       opacity: {
//         anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
//         random: true,
//         value: 0.5
//       },
//       // shape: {
//       //   character: {
//       //     fill: false,
//       //     font: "Verdana",
//       //     style: "",
//       //     value: "*",
//       //     weight: "400"
//       //   },
//       //   image: {
//       //     height: 100,
//       //     replace_color: true,
//       //     src: "images/github.svg",
//       //     width: 100
//       //   },
//       //   polygon: { nb_sides: 5 },
//       //   stroke: { color: "#000000", width: 0 },
//       //   type: "circle"
//       // },
//       size: {
//         anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
//         random: true,
//         value: 3
//       }
//     },
//     // polygon: {
//     //   draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
//     //   move: { radius: 10 },
//     //   scale: 1,
//     //   type: "none",
//     //   url: ""
//     // },
//     // retina_detect: true
//   }}

// />

export default Particle

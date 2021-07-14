/*eslint-disable*/
import React from 'react';
import Particles from 'react-tsparticles';

const Particle = ({ color, number, direction }) => 

  <Particles
  options={{
    fps_limit: 60,
    interactivity: {
      // detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "repulse" },
        // onhover: {
        //   enable: true,
        //   mode: "bubble",
        //   parallax: { enable: false, force: 2, smooth: 10 }
        // },
        resize: true
      },
      modes: {
        bubble: { distance: 250, duration: 0.3, opacity: 0, size: 0, speed: 3 },
        // grab: { distance: 400, line_linked: { opacity: 0.5 } },
        // push: { particles_nb: 4 },
        // remove: { particles_nb: 2 },
        repulse: { distance: 300, duration: 0.4 }
      }
    },
    particles: {
      color: {  value:`${color}`},
      line_linked: {
        // color: "#ffffff",
        // distance: 500,
        enable: false,
        // opacity: 0.4,
        // width: 2
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: `${direction}`,
        enable: true,
        out_mode: "out",
        random: false,
        size: true,
        speed: 1,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: `${number}` },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: true,
        value: 0.5
      },
      // shape: {
      //   character: {
      //     fill: false,
      //     font: "Verdana",
      //     style: "",
      //     value: "*",
      //     weight: "400"
      //   },
      //   image: {
      //     height: 100,
      //     replace_color: true,
      //     src: "images/github.svg",
      //     width: 100
      //   },
      //   polygon: { nb_sides: 5 },
      //   stroke: { color: "#000000", width: 0 },
      //   type: "circle"
      // },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 3
      }
    },
    // polygon: {
    //   draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    //   move: { radius: 10 },
    //   scale: 1,
    //   type: "none",
    //   url: ""
    // },
    // retina_detect: true
  }}

// options=
//    {{
//     // fullScreen: {
//     //   enable: true
//     // },
//     detectRetina: true,
//     // background: {
//     //   color: "#ffffff"
//     // },
//     fpsLimit: 60,
//     emitters: {
//       direction: "top",
//       life: {
//         count: 0,
//         duration: 0.1,
//         delay: 0.1
//       },
//       rate: {
//         delay: 0.5,
//         quantity: 1
//       },
//       size: {
//         width: 100,
//         height: 0
//       },
//       position: {
//         y: 100,
//         x: 50
//       }
//     },
//     particles: {
//       number: {
//         value: 0
//       },
//       destroy: {
//         mode: "split",
//         split: {
//           count: 1,
//           factor: { value: 1 / 3 },
//           rate: {
//             value: 100
//           },
//           particles: {
//             stroke: {
//               color: {
//                 value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
//               },
//               width: 1
//             },
//             number: {
//               value: 0
//             },
//             collisions: {
//               enable: false
//             },
//             opacity: {
//               value: 0.8,
//               animation: {
//                 enable: true,
//                 speed: 0.3,
//                 minimumValue: 0.1,
//                 sync: true,
//                 startValue: "max",
//                 destroy: "min"
//               }
//             },
//             shape: {
//               type: "circle"
//             },
//             size: {
//               value: 1,
//               animation: {
//                 enable: false,
//                 speed: 150,
//                 minimumValue: 1,
//                 destroy: "max",
//                 startValue: "min",
//                 sync: true
//               }
//             },
//             life: {
//               count: 1
//             },
//             move: {
//               enable: true,
//               gravity: {
//                 enable: true,
//                 inverse: false,
//                 acceleration: 1
//               },
//               speed: 1,
//               direction: "none",
//               random: false,
//               straight: false,
//               outMode: "destroy"
//             }
//           }
//         }
//       },
//       life: {
//         count: 1
//       },
//       shape: {
//         type: "line"
//       },
//       size: {
//         value: 50,
//         animation: {
//           enable: true,
//           sync: true,
//           speed: 100,
//           startValue: "max",
//           destroy: "min"
//         }
//       },
//       stroke: {
//         color: {
//           value: "#ffffff"
//         },
//         width: 1
//       },
//       rotate: {
//         path: true
//       },
//       move: {
//         enable: true,
//         gravity: {
//           acceleration: 15,
//           enable: true,
//           inverse: true,
//           maxSpeed: 100
//         },
//         speed: { min: 10, max: 20 },
//         outModes: {
//           default: "destroy",
//           top: "none"
//         },
//         // trail: {
//         //   fillColor: "#000",
//         //   enable: true,
//         //   length: 10
//         // }
//       }
//     }
//   }}

/>

export default Particle

// /*eslint-disable*/
// import React from 'react';
// import PropTypes from 'prop-types';
// import { SwitchTransition, CSSTransition } from "react-transition-group";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button } from "react-bootstrap";
// import { CarouselNewEStoreAds } from '../Carousel';
// import "./style.scss";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// const a11yProps = (index) => {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//    // backgroundColor: theme.palette.background.paper,
//   },
// }));

// const ScrollTab = () => {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const [state, setState] = React.useState(true);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setState(!state)
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Five" {...a11yProps(4)} />
//           <Tab label="Item Six" {...a11yProps(5)} />
//           <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//       </AppBar>
//       {/* <SwitchTransition mode='out-in'>
//           <CSSTransition> */}
//       <TabPanel value={value} index={0}>
//       <SwitchTransition >
//           <CSSTransition
//             key={state}
//             addEndListener={(node, done) => {
//               node.addEventListener("transitionend", done, false);
//             }}
//             classNames="fade"
//           >
//           <div className="button-container">
//         {/* {value ? <CarouselNewEStoreAds /> : <CarouselNewEStoreAds />} */}
//         <Button onClick={() => setState(state => !state)}>
//                 {state ? "Hello, world!" : "Goodbye, world!"}
//               </Button>
//         </div>
//         </CSSTransition>
//         </SwitchTransition>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <SwitchTransition >
//           <CSSTransition
//             key={state}
//             addEndListener={(node, done) => {
//               node.addEventListener("transitionend", done, false);
//             }}
//             classNames="fade"
//           >
//           <div className="button-container">
//         {/* {value ? <CarouselNewEStoreAds /> : <CarouselNewEStoreAds />} */}
//         <Button onClick={() => setState(state => !state)}>
//                 {state ? "Hello, world!" : "Goodbye, world!"}
//               </Button>
//         </div>
//         </CSSTransition>
//         </SwitchTransition>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <CarouselNewEStoreAds />
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//       {/* </CSSTransition>
//       </SwitchTransition>  */}
//     </div>
//   );
// }
// export default ScrollTab;

/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { CarouselNewEStoreAds } from '../Carousel';
import "./style.scss";

let data = [
  {
    name: 'Tab001',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
    name: 'Tab002',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
    name: 'Tab003',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  },
  {
    name: 'Tab004',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
    name: 'Tab005',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
    name: 'Tab006',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  }, {
    name: 'Tab007',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  // {
  //   name: 'Tab002',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  // },
  // {
  //   name: 'Tab003',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  // },
  // {
  //   name: 'Tab001',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  // },
  // {
  //   name: 'Tab002',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  // },
  // {
  //   name: 'Tab003',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  // }
];

// let abc = [<CarouselNewEStoreAds />, <CarouselNewEStoreAds />, <CarouselNewEStoreAds />]


export const Tabs = () => {


  // this.state = {
  //   activeTab: 0,
  //   data: data,
  //   abc: abc
  // }

  // this.changeTabOnClick = this.changeTabOnClick.bind(this);

  const [activeTab, setCompany] = useState(0);
  // const [data, setFirstName] = useState(data);
  // const [abc, setLastName] = useState(abc);

  const changeTabOnClick = (index) => {
    setCompany(index);
  }

  return (
    <div className="tabs-body">
      <TabHeader
        data={data}
        click={changeTabOnClick}
        activeId={activeTab} />
      <TabContent
        data={data}
        activeId={activeTab} />
    </div>
  )
}

const TabHeader = ({ activeId, click, data }) => {

  const doClick = (index) => {
    click(index);
  }

  let activeClass = activeId;

  let tabs = data.map((item, index) => {
    return <li className={(activeClass === index ? 'active' : '')}>
      <a onClick={() => doClick(index)} ><span>{item.name}</span></a>
    </li>
  });

  return (
    <ul className="tabs-header">{tabs}</ul>
  )
}

const TabContent = ({ activeId, data }) => {

  let activeClass = activeId;

  let content = data.map((item, index) => {
    return <div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{item.text}</div>
  });

  return (
    <div className="tabs-content">{content}</div>
  );
}

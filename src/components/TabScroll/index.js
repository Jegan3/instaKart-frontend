/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import ScrollAnimation from 'react-animate-on-scroll';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThriftStoreInfoCategories } from '../Carousel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}



export const MaterialTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tab-scroll'>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          <ThriftStoreInfoCategories />
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          Item 2
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          <ThriftStoreInfoCategories />
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          Item 4
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          <ThriftStoreInfoCategories />
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          Item Six
        </ScrollAnimation>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          Item Seven
        </ScrollAnimation>
      </TabPanel>
    </div>
  );
}

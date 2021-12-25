import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EventCard from './pages/Events/EventCard';
// import WorkshopCard from './pages/Events/WorkshopCard';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Card from '../../src/components/pages/Sponsors/SponsorSection/Card';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3}} id='box1'>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: "auto"}} className="box">
          {/* <ArrowBackIosNewIcon onClick={collapseMenu} /> */}
    <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 3, borderColor: '#FCC907', fontSize: '38px', fontColor: 'black' }}
        className="tabs">
        <Tab label="Photography" {...a11yProps(0)} />
        <Tab label="Cinematography" {...a11yProps(1)} />
        <Tab label="Outreach" {...a11yProps(2)} />
        <Tab label="Media" {...a11yProps(3)} />
        <Tab label="Design" {...a11yProps(4)} />
        <Tab label="Animation" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0} className="tab-panel">
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
          </div>

            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
          )}
          </div>
          
            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={2}>
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
          )}
          </div>
          
            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={3}>
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
          )}
          </div>
            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={4}>
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
          )}
          </div>
          
            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={5}>
        <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
          )}
          </div>
            <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}

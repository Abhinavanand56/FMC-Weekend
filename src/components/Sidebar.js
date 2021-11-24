import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EventCard from './EventCard';
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
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ flexGrow: 1, bgcolor: 'white', display: 'flex', height: 624 }} className="box">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', fontSize: '22px' }}
        className="tabs">
        <Tab label="Photography" {...a11yProps(0)} />
        <Tab label="Cinematography" {...a11yProps(1)} />
        <Tab label="Outreach" {...a11yProps(2)} />
        <Tab label="Media" {...a11yProps(3)} />
        <Tab label="Design" {...a11yProps(4)} />
        <Tab label="Animation" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0} className="tab-panel">
        <h1>Photography</h1>
        <div className="card-container">
          {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={1}>
        <h1>Cinematography</h1>
        <div className="card-container">
        {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={2}>
        <h1>Outreach</h1>
        <div className="card-container">
        {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={3}>
        <h1>Media</h1>
        <div className="card-container">
        {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={4}>
        <h1>Design</h1>
        <div className="card-container">
        {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={5}>
        <h1>Animation</h1>
        <div className="card-container">
        {Array(5).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
          )}
        </div>
      </TabPanel>
    </Box>
  );
}

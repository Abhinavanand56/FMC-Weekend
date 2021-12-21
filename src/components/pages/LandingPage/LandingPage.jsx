import Banner from './Banner/Banner';

import Image from '../../banner.png';
import Section from './Section/Section';
import "./LandingPage.css";

function landingPage() {
  return (
    <div>
      {/* <h1> Landing Page</h1> */}
      <Banner imagePath={Image} />
      <Section />
      <Banner imagePath={Image} />

    </div>
  );
}

export default landingPage;

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          FMC Weekend Annual Digital Art Fest of IIT BHU
        </p>
        <p className='footer-subscription-text'>
          Come and be a part of it
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Register</Link>
            <Link to='/'>Workshops</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Sponsors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <a href="https://www.youtube.com/watch?v=fS05V0QqQfQ">Youtube</a>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FMC Weekend
            </Link>
          </div>
          <small class='website-rights'>FMC © 2020</small>
          <div class='social-icons'>
            <a 
              class='social-icon-link facebook'
              href = "https://www.facebook.com/fmcweekendiitbhu"
              target='_blank'
              aria-label='Facebook' rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href = "https://www.instagram.com/fmc_weekend/"
              target='_blank'
              aria-label='Instagram' rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href = "https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
              target='_blank'
              aria-label='Youtube' rel="noreferrer"
            >
              <i class='fab fa-youtube' />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
import React from 'react';
import { Grid, Cell } from 'react-mdl';

const LandingPage = () => {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className='landing-grid'>
        <Cell col={12}>
          <img
            src='https://i.ibb.co/z7PLhsp/cropped-image.png'
            alt='cropped'
            className='profile-img'
          />
          <div className='banner-text'>
            <h1>Front End Developer</h1>
            <hr />
            <p>
              HTML5 | CSS3 | JavaScript | React | React Native | Redux | NodeJs
              | GitHub | Unity
            </p>
            <div className='social-links'>
              <a
                href='https://www.linkedin.com/in/skafti-sveinsson-297944180/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-linkedin' aria-hidden='true' />
              </a>
              <a
                href='https://github.com/skaftisveins'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-github-square' aria-hidden='true' />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingPage;

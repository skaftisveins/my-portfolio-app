import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../views/landing-page/Landing-page';
import AboutMe from '../../views/about-me/About-me';
import Resume from '../../views/resume/Resume';
import Projects from '../../views/projects/Projects';
import Contact from '../../views/contact/Contact';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/aboutme' component={AboutMe} />
    <Route path='/resume' component={Resume} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
);

export default Main;

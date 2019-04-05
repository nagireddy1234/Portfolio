import React from 'react';
import landingpage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Contacts from './contacts';
import About from './aboutme';
import { Switch, Route } from 'react-router-dom';
const Main = () => (
<Switch> 
<Route exact path="/" component={landingpage}/>
<Route exact path="/aboutme" component={About}/>
<Route exact path="/resume" component={Resume}/>
<Route exact path="/projects" component={Projects}/>
<Route exact path="/contact" component={Contacts}/>
</Switch>
)

export default Main;

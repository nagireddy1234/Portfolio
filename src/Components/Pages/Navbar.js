import React from 'react';
import landingpage from './landingpage';
import Resume from './cv';
import Projects from './projects';
import Contacts from './contacts';
import About from './aboutme';
import { Switch, Route } from 'react-router-dom';
const Navbar = () => (
<Switch> 
<Route exact path="/" component={landingpage}/>
<Route exact path="/about" component={About}/>
<Route exact path="/cv" component={Resume}/>
<Route exact path="/projects" component={Projects}/>
<Route exact path="/contact" component={Contacts}/>
</Switch>
)

export default Navbar;

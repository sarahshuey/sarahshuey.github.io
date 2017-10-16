import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from'./components/baselayout';
import About from'./components/about';
import Projects from'./components/allprojects';
import Resume from './components/resume'
import ProjectOne from './components/project1'
import ProjectTwo from './components/project2'
import ProjectThree from './components/project3'



ReactDOM.render(
<BrowserRouter>
   <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/About" component={About} />
       <Route path="/allprojects" component={Projects} />
       <Route path="/resume" component={Resume}/>
       <Route path="/project1" component={ProjectOne}/>
       <Route path="/project2" component={ProjectTwo}/>
       <Route path="/project3" component={ProjectThree}/>
     </Switch>
   </BaseLayout>
 </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();

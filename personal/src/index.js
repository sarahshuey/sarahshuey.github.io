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


ReactDOM.render(
<BrowserRouter>
   <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/About" component={About} />
       <Route path="/allprojects" component={Projects} />
       <Route path="/resume" component={Resume}/>
     </Switch>
   </BaseLayout>
 </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();

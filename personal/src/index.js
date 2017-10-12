import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from'./components/baselayout';
import About from'./components/about';
import Projects from'./components/allprojects';



ReactDOM.render(
<BrowserRouter>
   <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/About" component={About} />
       <Route path="/Projects" component={Projects} />
     </Switch>
   </BaseLayout>
 </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../style/style.css';

import 'bootstrap/dist/js/bootstrap.js';


import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from '../features/home';
import creative from './creative';

creative();

angular.module('app', [uirouter, home])
.config(routing);

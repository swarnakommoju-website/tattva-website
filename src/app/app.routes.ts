import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'services',
    component: Services
  },
  { 
    path: 'about-us', 
    component: AboutUs 
  },
  {
    path: 'contact',
    component: Contact
  }
];
import { Component } from '@angular/core';

import { Screens } from './screens/screens';
import { AboutSection } from '../../components/about-section/about-section';
import { ServicesSection } from '../../components/services-section/services-section';
import { HowItWorks } from '../../components/how-it-works/how-it-works';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Screens,
    AboutSection,
    ServicesSection,
    HowItWorks
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
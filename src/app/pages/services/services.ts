import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServicesSection } from '../../components/services-section/services-section';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterLink,
    ServicesSection,
    HowItWorksComponent
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
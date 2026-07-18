import { Component } from '@angular/core';
import { Screens } from './screens/screens';
import { AboutSection } from '../../components/about-section/about-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Screens, AboutSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
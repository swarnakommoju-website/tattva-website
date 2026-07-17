import { Component } from '@angular/core';
import { Screens } from './screens/screens';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Screens],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    TopBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
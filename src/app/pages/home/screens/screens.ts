import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-screens',
  standalone: true,
  templateUrl: './screens.html',
  styleUrl: './screens.css'
})
export class Screens implements OnInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef) {}

  slides = [
    {
      image: '/images/screen1.png',
      title: 'Success belongs to those who never stop trying.',
      description: 'Helping professionals unlock new opportunities and achieve lasting career success.',
      button: 'Explore Careers'
    },
    {
      image: '/images/screen2.png',
      title: 'Every application is one step closer to your dream job.',
      description: 'Every opportunity brings you closer to your dream career.',
      button: 'Apply Now'
    },
    {
      image: '/images/screen3.png',
      title: "We Don't Just Offer Jobs. We Build Careers.",
      description: 'Empowering talent with meaningful careers.',
      button: 'Get Started'
    }
  ];

  currentSlide = 0;

  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {

      this.currentSlide =
        (this.currentSlide + 1) % this.slides.length;

      this.cdr.detectChanges();

      console.log("Current Slide:", this.currentSlide);

    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
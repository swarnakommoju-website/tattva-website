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
      image: '/images/sl-4.jpg',
      title: "We Don't Just Offer Jobs. We Build Careers.",
      description: 'Empowering talent with meaningful careers.',
      button: 'Call Now'
    },
    {
      image: '/images/screen2.png',
      title: 'Every application is one step closer to your dream job.',
      description: 'Every opportunity brings you closer to your dream career.',
      button: 'Call Now'
    },
    {
      image: '/images/screen1.png',
      title: 'Success belongs to those who never stop trying.',
      description: 'Helping professionals unlock new opportunities and achieve lasting career success.',
      button: 'Call Now'
    },
  ];

  currentSlide = 0;
  intervalId: any;

  readonly phoneNumber = '+918501898060';

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.cdr.detectChanges();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  callNow() {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
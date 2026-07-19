import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection implements OnInit, OnDestroy {

  images = [
   
    // '/images/about/student-2.jpg',
    // '/images/about/student-3.jpg',
    '/images/about/student-4.jpg',
     '/images/about/student-1.jpg',
  ];

  currentSlide = 0;
  private timer: any;

  processSteps = [
    { icon: 'search', text: 'Career Discovery & Competency Assessment' },
    { icon: 'book', text: 'Specialized Industry Training Programs' },
    { icon: 'doc', text: 'ATS-Optimized Resume & LinkedIn Branding' },
    { icon: 'chat', text: 'Interview Readiness & Soft Skills Coaching' },
    { icon: 'target', text: 'Strategic Job Search & Career Planning' },
    { icon: 'briefcase', text: 'Recruitment & Placement Support' },
    { icon: 'handshake', text: 'Employer Engagement & Hiring Opportunities' },
    { icon: 'growth', text: 'Continuous Learning & Career Advancement' }
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.timer = setInterval(() => this.next(), 4500);
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goTo(i: number) {
    this.currentSlide = i;
    this.stopAutoplay();
    this.startAutoplay();
  }
}
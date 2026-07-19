import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  menuOpen = false;
  submenuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.submenuOpen = false;
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.submenuOpen = false;
  }

  toggleSubmenu(event: Event) {
    // Only intercept on mobile widths, where hover doesn't apply
    if (window.innerWidth <= 768) {
      event.preventDefault();
      this.submenuOpen = !this.submenuOpen;
    }
  }
}
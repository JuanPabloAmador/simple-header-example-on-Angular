import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMobileMenuOpen = false;
  menuList = [
    { text: 'About me', link: '#about', },
    { text: 'Proyects', link: '#proyects', },
    { text: 'Technologies', link: '#technologies', },
    { text: 'Contact', link: '#contact', }

  ]

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

}

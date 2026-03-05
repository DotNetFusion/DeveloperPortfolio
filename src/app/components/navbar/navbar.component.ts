import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private portfolioService = inject(PortfolioService);
  mobileMenuOpen = false;
  isDark = true;

  navLinks = [
    { label: 'Hero', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  socialLinks = [
    { icon: 'github', url: 'https://github.com/DotNetFusion', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/shivasunke/', label: 'LinkedIn' }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateTo(sectionId: string): void {
    this.portfolioService.scrollToSection(sectionId);
    this.mobileMenuOpen = false;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}

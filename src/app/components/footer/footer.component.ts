import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private portfolioService = inject(PortfolioService);
  
  currentYear = new Date().getFullYear();
  developer = this.portfolioService.getDeveloper;

  footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/shivasunke/' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/DotNetFusion' },
    { icon: '✉️', label: 'Email', url: 'mailto:shivasunke1006@gmail.com' }
  ];

  scrollToSection(sectionId: string): void {
    this.portfolioService.scrollToSection(sectionId);
  }
}

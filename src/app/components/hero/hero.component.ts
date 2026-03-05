import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  developer = this.portfolioService.getDeveloper;

  scrollToProjects(): void {
    this.portfolioService.scrollToSection('projects');
  }
}

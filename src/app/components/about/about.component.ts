import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  developer = this.portfolioService.getDeveloper;

  highlights = [
    { icon: '💼', label: '4+ Years Experience', value: 'In enterprise software development' },
    { icon: '🚀', label: 'Full Stack Developer', value: '.NET & Angular specialist' },
    { icon: '☁️', label: 'Cloud Expert', value: 'Azure & DevOps certified' },
    { icon: '🎯', label: 'Problem Solver', value: 'Building scalable solutions' }
  ];
}

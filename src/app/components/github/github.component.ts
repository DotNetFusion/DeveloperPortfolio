import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitHubComponent {
  private portfolioService = inject(PortfolioService);
  developer = this.portfolioService.getDeveloper;

  gitHubStats = [
    { icon: '📊', label: 'Repositories', value: '10+' },
    { icon: '⭐', label: 'Stars', value: '100+' },
    { icon: '👥', label: 'Followers', value: 'Growing' },
    { icon: '💻', label: 'Open Source', value: 'Active' }
  ];
}

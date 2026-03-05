import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent {
  private portfolioService = inject(PortfolioService);
  certifications = this.portfolioService.getCertifications;

  getCertIcon(issuer: string): string {
    const iconMap: { [key: string]: string } = {
      'Microsoft': '🔷',
      'Udemy': '📚'
    };
    return iconMap[issuer] || '🏆';
  }
}

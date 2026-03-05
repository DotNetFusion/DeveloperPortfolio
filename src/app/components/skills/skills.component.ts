import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skills = this.portfolioService.getSkills;

  getSkillIcon(skillName: string): string {
    const iconMap: { [key: string]: string } = {
      'C#': '🔷',
      'TypeScript': '📘',
      'JavaScript': '⚡',
      '.NET': '🔧',
      '.NET Core': '⚙️',
      'ASP.NET Core': '🌐',
      'Web API': '🔌',
      'Entity Framework': '📊',
      'ADO.NET': '💾',
      'Angular': '🅰️',
      'HTML': '📄',
      'CSS': '🎨',
      'Bootstrap': '🎯',
      'SQL Server': '🗄️',
      'Microsoft Azure': '☁️',
      'Azure App Services': '⛅',
      '.NET MAUI': '📱',
      'Git': '🌳',
      'Visual Studio': '🖥️',
      'VS Code': '📝'
    };
    return iconMap[skillName] || '✨';
  }
}

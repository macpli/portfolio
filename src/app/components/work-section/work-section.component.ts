import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'work-section',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.css',
})
export class WorkSectionComponent {
  projects = [
    {
      title: 'Fullstack Developer - Comarch',
      subtitle: 'July 2025 - Present',
      description:
        'Currently developing and maintaining of an ERP system in an agile Scrum environment. Leveraging modern fullstack technologies and AI-assisted development practices to deliver scalable enterprise solutions. Contributing to feature development, code reviews, and continuous improvement of system architecture.',
      technologies: ['Angular', '.NET', 'MS SQL'],
      link: 'https://www.comarch.pl/erp/xl/',
      placeholder: 'COMARCH',
      placeholderColor: '#1976d2'
    },
    {
      title: 'Fullstack Developer - ABIS',
      subtitle: 'Oct 2023 - July 2024',
      description:
        'Developed parts of comprehensive ERP solutions using Angular and .NET stack. Worked extensively with APIs, database management, and implemented unit testing to ensure code quality and system reliability in enterprise environments.',
      technologies: ['Angular', '.NET', 'MS SQL'],
      link: 'https://abis.krakow.pl/',
      placeholder: 'ABIS',
      placeholderColor: '#901e1eff'
    },
    {
      title: 'Keebit - Inventory System',
      subtitle: 'Personal Project',
      description:
        'Open-source inventory management system designed for custom mechanical keyboard enthusiasts. Built with modern web technologies to provide comprehensive part tracking and organization capabilities.',
      technologies: ['Next.js', 'PostgreSQL', 'Three.js'],
      link: 'https://github.com/macpli/keebit',
      placeholder: 'KEEBIT',
      placeholderColor: '#1b5e20'
      // image: 'keebit-banner.png'
    },
  ];

  public openLink(url: string): void {
    window.open(url, '_blank');
  }
}

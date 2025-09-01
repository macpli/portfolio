import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  skills = ['TypeScript', 'Angular', 'React', 'Node.js', '.NET', 'Node.js'];
}

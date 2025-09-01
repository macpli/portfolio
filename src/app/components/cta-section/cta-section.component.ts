import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cta-section',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css'
})
export class CtaSectionComponent {
  public readonly linkedinUrl = 'https://www.linkedin.com/in/maciej-pliszek-b35a18256/';
  public readonly githubUrl = 'https://github.com/macpli';
  public readonly email = 'pliszekmaciej0@gmail.com';

  public openEmail(): void {
    window.open(`mailto:${this.email}`, '_blank');
  }

  public openLinkedIn(): void {
    window.open(this.linkedinUrl, '_blank');
  }

  public openGitHub(): void {
    window.open(this.githubUrl, '_blank');
  }
}

import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { WorkSectionComponent } from '../work-section/work-section.component';
import { CtaSectionComponent } from '../cta-section/cta-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    WorkSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

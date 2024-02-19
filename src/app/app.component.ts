import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BobTestComponent } from './bob.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BobTestComponent],
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
}

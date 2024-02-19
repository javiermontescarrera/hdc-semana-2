import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'demo-root',
  template: `
    <header>
      <h1>Hola, soy Javier.</h1>
    </header>
  `,
})
export class AppComponent {}

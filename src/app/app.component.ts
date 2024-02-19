import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'demo-root',
  template: `
    <header class="py-7">
      <h1 class="text-3xl text-center mb-2">Hola, soy Javier.</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    </header>
  `,
})
export class AppComponent {}

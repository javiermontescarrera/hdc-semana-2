import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCard } from '@angular/material/card';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { FeaturesSectionComponent } from './features-section.component';
import { ShyftApiService } from './shyft-api.service';

@Component({
  selector: 'bob-balance-page',
  standalone: true,
  imports: [FeaturesSectionComponent, MatCard],
  template: `
    <section class="px-24 py-32 bg-white bg-opacity-5">
      <mat-card class="example-card">
        <p class="text-center text-3xl">Banlance Page</p>
        @if (account()) {
          <div class="top-4 left-4 flex justify-center items-center gap-2">
            <img [src]="account()?.info?.image" class="w-8 h-8" />
            <p class="text-xl">{{ account()?.balance }}</p>
          </div>
        }
      </mat-card>
    </section>
    <bob-features-section></bob-features-section>
  `,
})
export class BalancePageComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _network = 'mainnet-beta';
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

  readonly account = computedAsync(
    () =>
      this._shyftApiService.getAccount(
        this._publicKey()?.toBase58(),
        this._network,
        this._mint,
      ),
    { requireSync: true },
  );
}

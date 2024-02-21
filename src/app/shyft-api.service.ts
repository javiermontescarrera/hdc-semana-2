import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShyftApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _header = { 'x-api-key': 'VaqDrjcDa7lmeCSF' };
  private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

  // https://devnet-rpc.shyft.to?api_key=VaqDrjcDa7lmeCSF

  getAccount(publicKey: string | undefined | null) {
    if (!publicKey) {
      return of(null);
    }

    const url: URL = new URL(
      'https://api.shyft.to/sol/v1/wallet/token_balance',
    );
    url.searchParams.append('network', 'mainnet-beta');
    url.searchParams.append('wallet', publicKey);
    url.searchParams.append('token', this._mint);

    return this._httpClient
      .get<{
        result: { balance: number; info: { image: string } };
      }>(url.toString(), { headers: this._header })
      .pipe(map((response) => response.result));
  }
}

import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';

@Component({
  selector: 'bob-balance-page',
  template: `
    <section class="px-24 py-32 bg-white bg-opacity-5">
      <h2>Transactions Page</h2>
      <bob-transactions-section></bob-transactions-section>
    </section>
    <bob-features-section></bob-features-section>
  `,
  standalone: true,
  imports: [FeaturesSectionComponent, TransactionsSectionComponent],
})
export class TransactionsPageComponent {}

import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
    standalone: true,
    selector: 'bob-test',
    template: `
        Eso es un test 2
        
        <button mat-raised-button color="primary">Click me</button>
    `,
    imports: [MatButton]
})

// export class BobTestComponent implements OnInit {
//     constructor() { }

//     ngOnInit() { }
// }

export class BobTestComponent {
}
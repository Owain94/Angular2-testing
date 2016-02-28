import { Component } from 'angular2/core';
import { MockInterface } from './mock-interface';

@Component({
    selector: 'mock-detail',
    template: `
        <div *ngIf="data">
            <h2>{{ data.name }} details!</h2>
            <div>
                <label>id: </label>{{ data.id }}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="data.name" placeholder="name"/>
            </div>
        </div>
  `,
    inputs: ['data']
})

export class MockDetails {
    data: MockInterface;
}
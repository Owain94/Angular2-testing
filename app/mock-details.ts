import { Component } from 'angular2/core';
import { MockInterface } from './mock-interface';

@Component({
    selector: 'mock-detail',
    templateUrl: '../templates/mock-details.html',
    inputs: ['data']
})

export class MockDetails {
    data: MockInterface;
}
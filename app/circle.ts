import { Component } from 'angular2/core';

@Component({
    selector: 'circle',
    properties: [ 'color: color' ],
    templateUrl: '../templates/circle.html',
    styleUrls: [ '../css/circle.css' ]
})

export class Circle {
    color: string;

    constructor() {
        this.color = 'black'
    }

    changeBackground(): string {
        return this.color;
    }
}
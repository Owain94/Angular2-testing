import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    templateUrl: '../templates/hello-world.html'
})

export class HelloWorld {
    message: string;

    constructor() {
        this.message = 'world';
    }
}
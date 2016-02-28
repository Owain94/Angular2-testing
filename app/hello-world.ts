import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `<h2>Hello, {{ message }}</h2>`
})

export class HelloWorld {
    message: string;

    constructor() {
        this.message = 'world';
    }
}
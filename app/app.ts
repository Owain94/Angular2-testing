import { Component } from 'angular2/core';
import { HelloWorld } from './hello-world';
import { Test } from './test';

@Component({
    selector: 'app',
    template: `
        <test></test>
        <hello-world></hello-world>
    `,
    directives: [ HelloWorld, Test ]
})
export class App { }

import { Component, OnInit } from 'angular2/core';
import { HelloWorld } from './hello-world';
import { Test } from './test';
import { TestService } from './test-service';
import { MockInterface } from './mock-interface';
import { MockDetails } from './mock-details';
import { Circle } from './circle';

@Component({
    selector: 'app',
    templateUrl: '../templates/app.html',
    directives: [ HelloWorld, Test, MockDetails, Circle ],
    providers: [ TestService ],
    styleUrls: [ '../css/app.css' ]
})
export class App implements OnInit {
    data: MockInterface[];
    dataSlow: MockInterface[];

    selectedData: MockInterface;

    constructor(private _testService: TestService) { }

    ngOnInit() {
        this.getdata();
        this.getdataSlowly();
    }

    getdata() {
        this._testService.getMockData().then(data => this.data = data);
    }

    getdataSlowly() {
        this._testService.getMockSlowly().then(data => this.dataSlow = data);
    }

    onSelect(data: MockInterface) {
        this.selectedData = data;
    }
}

import { Component, OnInit } from 'angular2/core';
import { HelloWorld } from './hello-world';
import { Test } from './test';
import { TestService } from './test-service';
import { MockInterface } from './mock-interface';

@Component({
    selector: 'app',
    template: `
        <test></test>
        <hello-world></hello-world>

        <ul class="mockdata">
            <li *ngFor="#d of data">
                <span class="badge">{{d.id}}</span> {{d.name}}
            </li>
        </ul>

        <ul class="mockdata">
            <li *ngFor="#d of dataSlow">
                <span class="badge">{{d.id}}</span> {{d.name}}
            </li>
        </ul>

    `,
    directives: [ HelloWorld, Test ],
    providers: [ TestService ],
    styles:[`
    .mockdata {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .mockdata li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .mockdata .text {
      position: relative;
      top: -3px;
    }
    .mockdata .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
})
export class App implements OnInit {
    data: MockInterface[];
    dataSlow: MockInterface[];

    constructor(private _testService: TestService) { }

    getdata() {
        this._testService.getMockData().then(data => this.data = data);
    }

    getdataSlowly() {
        this._testService.getMockSlowly().then(data => this.dataSlow = data);
    }

    ngOnInit() {
        this.getdata();
        this.getdataSlowly();
    }
}

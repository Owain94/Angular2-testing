import { Component } from 'angular2/core';

@Component({
    selector: 'circle',
    properties: [ 'height: height', 'width: width', 'color: color', 'cx: cx', 'cy: cy', 'radius: radius', 'stroke: stroke', 'fill: fill' ],
    templateUrl: '../templates/circle.html',
    styleUrls: [ '../css/circle.css' ]
})

export class Circle {
    height: number;
    width: number;
    color: string;
    cx: number;
    cy: number;
    radius: number;
    stroke: number;
    fill: string;

    constructor() {
        this.height = 100;
        this.width = 100;
        this.color = 'black';
        this.cx = 50;
        this.cy = 50;
        this.radius = 40;
        this.stroke = 3;
        this.fill = 'red';
    }

    changeWidth(): number {
        return this.width;
    }

    changeHeight(): number {
        return this.height;
    }

    changeBackground(): string {
        return this.color;
    }

    changeCx(): number {
        return this.cx;
    }

    changeCy(): number {
        return this.cy;
    }

    changeRadius(): number {
        return this.radius;
    }

    changeStrokeWidth(): number {
        return this.stroke;
    }

    changeFill(): string {
        return this.fill;
    }
}
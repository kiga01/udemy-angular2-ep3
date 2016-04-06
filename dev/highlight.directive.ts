import {Directive} from 'angular2/core'
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";


@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective implements OnInit{
    private _defaultColor: 'green';

    constructor(private _elRef: ElementRef) {

    }

    ngOnInit():any {
        this._elRef.nativeElement.style.backgroundColor = this._defaultColor
    }
}
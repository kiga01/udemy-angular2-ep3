import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div myHighlight>
            Higlight me!
        </div>
        <div myHighlight>
            Higlight me to!
        </div>
    `,
    directives: ['HighlightDirective']
})

export class AttributeDirectives {

}
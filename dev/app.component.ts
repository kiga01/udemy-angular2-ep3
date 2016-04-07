import {Component} from 'angular2/core';
import {AttributeDirectives} from './attribute-directives.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <my-attribute-directives></my-attribute-directives>
        </div>
    `,
    directives: [
        AttributeDirectives,
    ],
})
export class AppComponent {

}
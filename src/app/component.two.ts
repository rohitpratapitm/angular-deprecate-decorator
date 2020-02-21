import { Component, Input } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'component-two',
  template: `<h1>New Component</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class ComponentTwo  {
  @Input() name: string;
}

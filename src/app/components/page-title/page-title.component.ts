import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() text: string;
  @Input() buttonText: string;

  @Output() onButtonClick: EventEmitter<null> = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }
}

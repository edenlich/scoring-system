import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/services/results.service';
import { Test } from 'src/app/services/tests.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items$: Observable<Test[] | Result[]>;
  @Input() type: 'test' | 'result' = 'test';
  @Input() DisplayTakeTest: boolean = true;

  @Output() onTakeTest: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  step = null;

  setStep(index: number) {
    this.step = index;
  }

  takeTest(id: string) {
    this.onTakeTest.emit(id);
  }

}

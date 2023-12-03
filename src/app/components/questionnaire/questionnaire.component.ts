import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Answer } from 'src/app/services/results.service';
import { Test } from 'src/app/services/tests.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @Input() resultEntryForm: FormGroup;
  @Input() testToAnswer: Test;

  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();

  get answers() {
    return this.resultEntryForm.get('answers') as FormArray;
  }

  get CompanyName() {
    return this.resultEntryForm.get('companyName');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit(this.resultEntryForm);
  }

}

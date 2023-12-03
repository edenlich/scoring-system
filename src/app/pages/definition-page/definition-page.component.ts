import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { Criteria, Test, TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-definition-page',
  templateUrl: './definition-page.component.html',
  styleUrls: ['./definition-page.component.scss']
})
export class DefinitionPageComponent implements OnInit {
  TestGroup = this.fb.group({
    name: [''],
    description: [''],
    criterias: this.fb.array([
      this.fb.group({
        question: [''],
        weight: [0],
        scores: this.fb.array([this.fb.control(''), this.fb.control(''), this.fb.control(''), this.fb.control(''),])
      }),
    ])
  });
  errors = {
    name: {
      error: `Name can't be empty`,
      display: false,
    },
    criteria: {
      error: 'Must have at least 1 criteria',
      display: false,
    },
    weight: {
      error: 'Total sum of weight must equal to 1',
      display: false,
    },
  }

  durationInSeconds = 3;

  get criterias() {
    return this.TestGroup.get('criterias') as FormArray;
  }

  get name() {
    return this.TestGroup.get('name');
  }

  get description() {
    return this.TestGroup.get('description')
  }

  scoreArray = Array(4).fill('')

  constructor(private fb: FormBuilder, private testService: TestsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  addNewCriteria() {
    this.criterias.push(this.fb.group({
      question: [''],
      weight: [0],
      scores: this.fb.array([this.fb.control(''), this.fb.control(''), this.fb.control(''), this.fb.control(''),])
    }))
  }

  clear() {
    this.TestGroup.reset();
    this.criterias.clear();
    this.addNewCriteria();
    this.removeErrors();
  }

  removeErrors() {
    this.errors.name.display = false;
    this.errors.criteria.display = false;
    this.errors.weight.display = false;
  }

  displayError() {
    this.errors.name.display = !this.name.value;

    const criteriaValue = Object.values(this.criterias.controls[0].value).every((value) => { return !!value });
    this.errors.criteria.display = !criteriaValue;

    const allWeight = this.criterias.controls.map((control) => { return control.value.weight })
    const weightSum = allWeight.reduce((partialSum, a) => partialSum + a, 0);
    this.errors.weight.display = weightSum !== 1;
  }

  submit() {
    this.displayError();
    if (this.errors.name.display || this.errors.criteria.display || this.errors.weight.display) return;

    const criterias = this.criterias.controls.map((control): Criteria => {
      const val = control.value;
      return {
        question: val.question,
        weight: val.weight,
        scores: val.scores
      }
    });

    const test: Test = {
      name: this.name.value,
      description: this.description.value,
      criterias,
    };
    this.testService.saveNewTest(test).subscribe((t) => {
      this.openSnackBar(t.name);
      this.clear();
    });
  }

  openSnackBar(testName: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: `New test named "${testName}" is created successfully!`,
    });
  }
}

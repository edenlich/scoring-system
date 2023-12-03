import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { CreateResult, ResultsService } from 'src/app/services/results.service';
import { Test, TestsService } from 'src/app/services/tests.service';

export interface Answer {
  score: number;
  weight: number;
}

@Component({
  selector: 'app-result-entry-page',
  templateUrl: './result-entry-page.component.html',
  styleUrls: ['./result-entry-page.component.scss']
})
export class ResultEntryPageComponent implements OnInit {
  tests$: Observable<Test[]>;
  testId: string = null;
  testToAnswer: Test;
  testSumResult: number;
  durationInSeconds = 3;
  resultEntryForm: FormGroup;

  get answers() {
    return this.resultEntryForm.get('answers') as FormArray;
  }

  get companyName() {
    return this.resultEntryForm.get('companyName');
  }

  constructor(
    private TestsService: TestsService,
    private resultsService: ResultsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllTests();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('testId');
      this.testId = id;
      this.testToAnswer = null;
      this.TestsService.getById(id).subscribe((test) => {
        this.testToAnswer = test;
        this.createAnswersFormArray();
      });
    });
  }

  createAnswersFormArray() {
    this.resultEntryForm = this.fb.group({
      companyName: this.fb.control(''),
      answers: this.fb.array([]),
    });
    this.testToAnswer?.criterias.forEach(() => {
      this.answers.push(this.fb.control(''),
      );
    })
  }

  getAllTests() {
    this.tests$ = this.TestsService.getAll();
  }

  onTakeTest(id: string) {
    this.router.navigate(['/result-entry', id]);
  }

  back() {
    this.router.navigate(['/result-entry']);
  }

  submit(resultEntryForm: FormGroup) {
    this.resultEntryForm = resultEntryForm;
    const answers: number[] = this.answers.controls.map((a) => a.value + 1)
    this.calculateTestScore(answers);
    const createdResult: CreateResult = {
      testId: this.testToAnswer.id,
      companyName: this.companyName.value,
      answers,
      result: this.testSumResult,
    };

    this.resultsService.createResult(createdResult).subscribe((r) => this.openSnackBar(this.testToAnswer.name));
  }

  calculateTestScore(answers: number[]) {
    let totalSum = 0;
    answers.forEach((answer, index) => {
      const weight = this.testToAnswer.criterias[index].weight
      totalSum += (answer * weight);
    });
    this.testSumResult = totalSum;
  }

  openSnackBar(testName: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: `New test entry for the test named "${testName}" is saved successfully!`,
    });
  }
}

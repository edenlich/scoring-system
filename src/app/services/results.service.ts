import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createdResultsMock } from 'src/assets/mocks/results.mock';
import { Test } from './tests.service';
import { testsMock } from 'src/assets/mocks/tests.mock';

export interface Answer {
  question: string;
  answer: string;
  score: number;
  weight: number;
}

export interface Result {
  name: string;
  description: string;
  companyName: string;
  testId: string;
  answers: Answer[];
  result: number;
}

export interface CreateResult {
  testId: string;
  companyName: string;
  answers: number[];
  result: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  createResult(result: CreateResult): Observable<CreateResult> {
    createdResultsMock.push(result);
    return of(result);
  }

  getAllResults(): Observable<Result[]> {
    const createdResults: CreateResult[] = createdResultsMock;
    const tests: Test[] = testsMock;

    const results: Result[] = this.populateResultAnswers(createdResults, tests);
    return of(results);
  }

  private populateResultAnswers(createdResults: CreateResult[], tests: Test[]): Result[] {
    return createdResults.map((r) => {
      const test = tests.find((t) => r.testId === t.id);
      const answers: Answer[] = r.answers.map((a, answerIndex) => {
        return {
          question: test.criterias[answerIndex].question,
          answer: test.criterias[answerIndex].scores[a-1],
          weight: test.criterias[answerIndex].weight,
          score: a,
        };
      })
      return {
        name: test.name,
        description: test.description,
        companyName: r.companyName,
        testId: test.id,
        result: r.result,
        answers,
      }
    });
  }
}

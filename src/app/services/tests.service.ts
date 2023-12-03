import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testsMock } from 'src/assets/mocks/tests.mock';

export interface Criteria {
  question: string;
  weight: number;
  scores: string[];
}

export interface Test {
  id?: string;
  name: string;
  description: string;
  criterias: Criteria[];
}

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  constructor() { }

  saveNewTest(test: Test): Observable<Test> {
    testsMock.push({ ...test, id: `${testsMock.length + 1}` });
    return of(test);
  }

  getById(id: string): Observable<Test> {
    const test = testsMock.find((test) => test.id === id);
    return of(test);
  }

  getAll(): Observable<Test[]> {
    return of(testsMock);
  }
}

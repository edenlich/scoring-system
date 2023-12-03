import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Result, ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-performance-page',
  templateUrl: './performance-page.component.html',
  styleUrls: ['./performance-page.component.scss']
})
export class PerformancePageComponent implements OnInit {
  results$: Observable<Result[]>;

  constructor(private resultsService: ResultsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults() {
    this.results$ = this.resultsService.getAllResults();
  }

  takeTest(id: string) {
    this.router.navigate(['/result-entry', id]);
  }
}

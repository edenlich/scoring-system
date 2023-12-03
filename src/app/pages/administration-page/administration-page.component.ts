import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Test, TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.scss']
})
export class AdministrationPageComponent implements OnInit {
  tests$: Observable<Test[]>;

  constructor(private TestsService: TestsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTests();
  }

  getAllTests() {
    this.tests$ = this.TestsService.getAll();
  }

  onDefineTest() {
    this.router.navigateByUrl('/definition');
  }

  onTakeTest(id: string) {
    this.router.navigate(['/result-entry', id]);
  }
}

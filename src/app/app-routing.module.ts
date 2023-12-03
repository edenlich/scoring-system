import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { PerformancePageComponent } from './pages/performance-page/performance-page.component';
import { ResultEntryPageComponent } from './pages/result-entry-page/result-entry-page.component';


const routes: Routes = [
  {
    path: 'administration',
    component: AdministrationPageComponent,
  },
  {
    path: 'definition',
    component: DefinitionPageComponent,
  },
  {
    path: 'performance',
    component: PerformancePageComponent,
  },
  {
    path: 'result-entry',
    component: ResultEntryPageComponent,
  },
  {
    path: 'result-entry/:testId',
    component: ResultEntryPageComponent,
  },
  { path: '', redirectTo: 'administration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

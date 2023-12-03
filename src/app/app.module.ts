import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { PerformancePageComponent } from './pages/performance-page/performance-page.component';
import { ResultEntryPageComponent } from './pages/result-entry-page/result-entry-page.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdministrationPageComponent,
    DefinitionPageComponent,
    PerformancePageComponent,
    ResultEntryPageComponent,
    ItemListComponent,
    PageTitleComponent,
    QuestionnaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

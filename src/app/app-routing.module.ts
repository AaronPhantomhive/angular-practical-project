import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./app-features/main/main.component";
import {BrowserModule} from "@angular/platform-browser";
import {RecordTimeComponent} from "./app-features/main/record-time/record-time.component";
import {IntroAngularComponent} from "./app-features/main/intro-angular/intro-angular.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'introAngular',
    component: IntroAngularComponent
  },
  {
    path: 'recordTime',
    component: RecordTimeComponent
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

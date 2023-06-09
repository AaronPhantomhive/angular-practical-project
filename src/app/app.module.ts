import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './app-features/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RecordTimeComponent } from './app-features/main/record-time/record-time.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { IntroAngularComponent } from './app-features/main/intro-angular/intro-angular.component';
import {FocusColorDirective} from "./app-common/directives/pattern/focus-color.directive";
import { UsefulToolsComponent } from './app-features/main/useful-tools/useful-tools.component';
import { RecordTimeAGgridComponent } from './app-features/main/record-time-aggrid/record-time-aggrid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecordTimeComponent,
    IntroAngularComponent,
    FocusColorDirective,
    UsefulToolsComponent,
    RecordTimeAGgridComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        MatGridListModule,
        MatButtonToggleModule
    ],
  providers: [],
  exports: [
    FocusColorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

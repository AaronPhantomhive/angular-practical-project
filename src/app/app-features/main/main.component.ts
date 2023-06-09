import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  //
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  loadPage: number = 1;

  constructor(private breakpointObserver: BreakpointObserver) {}

  getLoadPage(loadPage: number) {
    this.loadPage = loadPage;
  }

}

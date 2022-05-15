import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'demo';
  constructor(private dt: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('timer app')
    //     this.dt.detectChanges()
    // }, 2000)
  }

  onClick() {

  }

  get mtt() {
    console.log("App-");
    return "App";
  }
}

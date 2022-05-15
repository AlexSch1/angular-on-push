import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent implements OnInit {

  constructor(private dt: ChangeDetectorRef) {
    // setTimeout(() => {
    //   console.log('timer C')
    //     // this.dt.detectChanges()
    //     this.dt.markForCheck()
    // }, 2000)
  }

  ngOnInit(): void {
  }

  get mtt() {
    console.log("C-");
    return "C";
  }

}

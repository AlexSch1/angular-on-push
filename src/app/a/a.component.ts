import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {
  public count = 0
  constructor(private dt: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('timer A');
      this.count = 5
      // this.dt.detectChanges()
      this.dt.markForCheck()
    }, 2000)
  }

  onClick() {

  }

  get mtt() {
    console.log("A-");
    return "A";
  }

}

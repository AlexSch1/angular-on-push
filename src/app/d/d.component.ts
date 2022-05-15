import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get mtt() {
    console.log("D-");
    return "D";
  }
}

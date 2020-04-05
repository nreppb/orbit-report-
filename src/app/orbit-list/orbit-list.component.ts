import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() { }

  shouldShowWarning(boolean) {
  for (let i=0; i< this.satellites.length; i++) {
    if (this.satellites[i].type === 'Space Debris') {
    return true;
    } 
  //  else {
  //       return false;
  //    }

    }
  }

}

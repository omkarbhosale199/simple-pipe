import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { GetnumService } from '../service/getnum.service';


@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {

  numbers$!:Observable<number[]>
  // As per Angular standard $ are use when Observable use
  //as coding standard format
  constructor(private _GetnumService:GetnumService) { }

  ngOnInit(): void {
    // without subscribe we get data from Observable
   this.numbers$ = this._GetnumService.getNumber();
  }

}

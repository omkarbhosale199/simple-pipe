import { Component, OnInit } from '@angular/core';
import { GetnumService } from '../service/getnum.service';

@Component({
  selector: 'app-asyncpipewithpromise',
  templateUrl: './asyncpipewithpromise.component.html',
  styleUrls: ['./asyncpipewithpromise.component.css']
})
export class AsyncpipewithpromiseComponent implements OnInit {


  numbers: number[] = [];

  constructor(private _GetnumService:GetnumService) {}

  ngOnInit(): void {
    this._GetnumService.getNumber();
    };
  }

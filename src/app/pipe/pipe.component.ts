import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
anyDate= new Date();
fullName='Omkar Bhosale';
city='pune'
price:number=5000;
discount:Number=1.2246;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GetnumService } from '../service/getnum.service';

@Component({
  selector: 'app-customfilterpie',
  templateUrl: './customfilterpie.component.html',
  styleUrls: ['./customfilterpie.component.css']
})
export class CustomfilterpieComponent implements OnInit {

  // If we want to show data on browser then take variable then instance of variable in this method
  //step 1 for Data show
  users:any;
  searchByName:any='';
  searchById:any;
  //.......................
  constructor(private _GetnumService:GetnumService) { }

  ngOnInit(): void {
    this._GetnumService.getUser().subscribe(res=>{console.log("custom data in num ",res);
//..................................................
    //step 2
    this.users=res;
    })

  }


}

import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetnumService {

  constructor() { }
  
  // CREATION OBSERVABLES
  getNumber():Observable<number[]>{

return of([1,2,3,4,5,6,7,8,9,10]).pipe(delay(2000));
  }
}

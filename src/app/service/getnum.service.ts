import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetnumService {

  constructor(private _HttpClient:HttpClient) { }
userUrl='https://jsonplaceholder.typicode.com/users';
  // CREATION OBSERVABLES
  getNumber():Observable<number[]>{

return of([1,2,3,4,5,6,7,8,9,10]).pipe(delay(2000));
  }


getNumbers(): Promise<number[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 2000);
  });
}
getUser(): Observable<any>{
return this._HttpClient.get(this.userUrl)
}

}

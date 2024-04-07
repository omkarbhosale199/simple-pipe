import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {

    console.log("Filter pipe",value);
    console.log("Search name",searchTearm);

    return value.filter(function(search:any){
return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1 })
//     search.id
//     search.email
//      etc.
  }

}
  // when creating custom pipe first implements PipeTransform then use transform method in PipeTransform
// go to definition PipeTransform
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
//.......................................................................................
  // transform(value: any, searchTearm: any): any {
// console.log('filer pipe', value); // 10 users
    // console.log('search name', searchTearm);
    // return value.filter(function(search: any) {
    // return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1

    // });
//........................................................................................

//CHAT GPT

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(value: any[], searchTerm: string): any[] {
//     if (!value || !searchTerm) {
//       return value;
//     }

//     searchTerm = searchTerm.toLowerCase();

//     return value.filter((item: any) => {
//       return item.name.toLowerCase().indexOf(searchTerm) !== -1;
//     });
//   }
// }

//....................
// CHAT GPT

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(value: any, searchTerm: string): any {
//     if (!value || !searchTerm) {
//       return value;
//     }

//     searchTerm = searchTerm.toLowerCase();

//     return value.filter((item: any) => {
//       return item.name.toLowerCase().includes(searchTerm);
//     });
//   }
// }


// value not found

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(value: any, searchTerm: string): any {
//     if (!value || !searchTerm) {
//       return [];
//     }

//     searchTerm = searchTerm.toLowerCase();

//     const filteredItems = value.filter((search: any) => {
//       return search.name.toLowerCase().indexOf(searchTerm) > -1;
//     });

//     return filteredItems.length > 0 ? filteredItems : [];
//   }
// }

//......................

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(value: any, searchTerm: string): any {
//     if (!value || !searchTerm) {
//       return value;
//     }

//     searchTerm = searchTerm.toLowerCase();

//     const filteredItems = value.filter((search: any) => {
//       return search.name.toLowerCase().indexOf(searchTerm) > -1;
//     });

//     if (filteredItems.length === 0) {
//       return [{ name: 'No matching items found' }]; // Return a placeholder item
//     }

//     return filteredItems;
//   }
// }

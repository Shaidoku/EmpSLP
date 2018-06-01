import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the NewssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewssProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewssProvider Provider');
  }

  obNe(){
  	return this.http.get('http://localhost/app/index.php/noticiaC');
  }

}

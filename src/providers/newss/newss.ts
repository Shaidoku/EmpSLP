import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewssProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewssProvider Provider');
  }

  obNe(){
  	return this.http.get('http://localhost/app/index.php/noticiaC');
  }

}

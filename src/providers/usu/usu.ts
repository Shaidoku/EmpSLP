import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuProvider Provider');
  }
  
  obUs(){
  	return this.http.get('http://localhost/app/index.php/usuarioC');
  }

}

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventosProvider Provider');
  }
  obtenerEventos(){
	return this.http.get('http://localhost/app/index.php/calendarioC')
}
}

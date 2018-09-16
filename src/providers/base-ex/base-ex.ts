import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseExProvider {

  constructor(public http: HttpClient) {console.log('Hello BaseExProvider Provider');}

calDatos(){return this.http.get('http://localhost/app/index.php/calendarioC');}

usuDatos(){return this.http.get('http://localhost/app/index.php/usuarioC');}

proDatos(){return this.http.get('http://localhost/app/index.php/proyectoC');}

notDatos(){return this.http.get('http://localhost/app/index.php/noticiaC');}

menDatos(){return this.http.get('http://localhost/app/index.php/mensajeC');}
}

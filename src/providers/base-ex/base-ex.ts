import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseExProvider {

  constructor(public http: HttpClient)
   {console.log('Hello BaseExProvider Provider');}

calDatos(){return this.http.get('http://192.168.100.7/app/index.php/calendarioC');}

usuDatos(){return this.http.get('http://192.168.100.7/app/index.php/usuarioC');}

proDatos(){return this.http.get('http://192.168.100.7/app/index.php/proyectoC');}

notDatos(){return this.http.get('http://192.168.100.7:8080/api/not');}
//http://emprendedoresslp.test/api/not http://192.168.100.7:8080/api/not http://192.168.100.6:8080/api/not

menDatos(){return this.http.get('http://192.168.100.7/app/index.php/mensajeC');}

chaDatos(){return this.http.get('http://192.168.100.7/app/index.php/chatC');}
}
// JoanOrtizITSLP@outlook.com
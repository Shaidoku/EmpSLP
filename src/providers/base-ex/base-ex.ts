import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseExProvider {

  constructor(public http: HttpClient)
   {console.log('Hello BaseExProvider Provider');}

calDatos(){return this.http.get('http://192.168.100.7:8080/api/events');}

usuDatos(){return this.http.get('http://192.168.100.7:8080/api/users');}

proDatos(){return this.http.get('http://192.168.100.7:8080/api/projects');}

notDatos(){return this.http.get('http://192.168.100.7:8080/api/noticias');}
//http://emprendedoresslp.test/api/not http://192.168.100.7:8080/api/not http://192.168.100.6:8080/api/not

menDatos(){return this.http.get('http://192.168.100.7:8080/api/messages');}

chaDatos(){return this.http.get('http://192.168.100.7:8080/api/chats');}
}
// JoanOrtizITSLP@outlook.com
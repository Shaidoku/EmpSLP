import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

    @Injectable()

    export class GlobalProvider{
    	public email: string;
        public password: string;
        public auth = 3; 

        constructor(public http: HttpClient){
        	console.log('Hello GlobalProvider Provider');
        }

    }

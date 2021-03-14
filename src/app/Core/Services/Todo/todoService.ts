import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Todo } from '../../Models';
 
@Injectable()
export class todoService { 
   baseURL:string="https://jsonplaceholder.typicode.com/todos";
 
   constructor(private http:HttpClient){
   }
 
   getTodo(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.baseURL).pipe(catchError((error: any) => throwError(error.message)));
   }
}
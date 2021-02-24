import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { onform } from './value';
@Injectable({
  providedIn: 'root'
})
export class FormRendService {

  constructor(private http: HttpClient) { }


  getform() {
    return this.http.get<onform[]>('http://localhost/angular/active.php', {responseType: 'json'});
  }

  addForm(newform: onform) {
    return this.http.post('http://localhost/angular/new.php', newform);
  }
  /*
  deleteForm(newform: onform) {
    return this.http.delete<onform[]>('http://localhost/angular/delete.php?newform=' + newform);
  }
  */

  deleteForm(newform: onform) {
    return this.http.post('http://localhost/angular/delete.php' , newform);
  }

}

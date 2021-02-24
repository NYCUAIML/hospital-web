import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { field, value2 } from '../global.model';
import form from '../../assets/form.json';
import form1 from '../../assets/form1.json';
import form2 from '../../assets/form2.json';
import {onform} from '../value';
import {FormRendService} from '../form-rend.service';

@Component({
  selector: 'app-formrender',
  templateUrl: './formrender.component.html',
  styleUrls: ['./formrender.component.css']
})
export class FormrenderComponent implements OnInit {

  constructor(private frend: FormRendService,
    private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.model = data;
      this.text_generate = data.attributes;
      // console.log(this.text_generate);
      // console.log(this.model.attributes);
      // console.log(this.model);
    });
  }
  private _jsonURL = './assets/form.json';
  model: any = [];
  model1: onform = [];
  text_generate: any = [];
  text_generate1: any = [];

  medicalform: any = [
    '病歷1',
    '病歷2',
    '病歷3',
  ];

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit() {
    this.frend.getform().subscribe((data: onform[]) => {
      // tslint:disable-next-line: forin
      for (const i in data) {
        this.model1[i] = data[i];
        this.model1[i] = JSON.parse(this.model1[i]);
      }
      // console.log(data[0]);
      // this.model1[0] = data[0];
      // this.model1[0] = JSON.parse(this.model1[0]);
      // console.log(this.model1[0]);
    });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  check(biling: any ) {
  for (const i in this.model1) {
    if (biling === this.model1[i].formname) {
      this.model = this.model1[i];
      this.text_generate = this.model1[i].attributes;
      break ;
    }
  }
  }
  submit() {}

}

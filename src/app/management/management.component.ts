import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import swal from 'sweetalert2';
import form from '../../assets/form.json';
import form1 from '../../assets/form1.json';
import form2 from '../../assets/form2.json';
import {FormRendService} from '../form-rend.service';
import {onform} from '../value';
import { Router } from '@angular/router';

export interface PeriodicElement {
  formname: string;
  description: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {formname: form.formname, description: form.description},
  {formname: form1.formname, description: form1.description},
  {formname: form2.formname, description: form2.description},
  {formname: 'zxcczx', description: '3.0079'},
  {formname: 'fgnfgn', description: '4.0079'},
];

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private frend: FormRendService, private router: Router) { }
  model1: any = [] ;
  i: any = [] ;


  displayedColumns: string[] = ['formname', 'description', 'action'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.frend.getform().subscribe((data: onform[]) => {
      // tslint:disable-next-line: forin
      for (const z in data) {
        this.model1[z] = data[z];
        this.model1[z] = JSON.parse(this.model1[z]);
      }
    this.dataSource.data = this.model1;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      // console.log(data[0]);
      // this.model1[0] = data[0];
      // this.model1[0] = JSON.parse(this.model1[0]);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeForm(i: onform): void {
    /*
    console.log(this.i);
    this.i = JSON.stringify(this.i);
    console.log(this.i);
    this.frend.deleteForm(i).subscribe(data =>{
      this.i = this.i.filter(u => u !== i);
    });
    console.log(this.i);
   */
    swal({
      title: 'Warning!!',
      text: 'Do you want to remove this form?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove it!'
    }).then((result) => {
      if (result.value) {
        // this.dataSource.data = this.dataSource.data.filter((value) => {
          // return value !== i; });
        // console.log(i);
        i = JSON.stringify(i);
        console.log(i);
        this.frend.deleteForm(i).subscribe(
          data => this.router.navigate([''])
          // data =>{
          // this.i = this.i.filter(u => u !== i);
        // }
        );
      }
    }
    );   // this.dataSource.data = this.dataSource.data.filter((value) => {
          // return value.formname !== i.formname; });
        // console.log(this.dataSource);
    }
}

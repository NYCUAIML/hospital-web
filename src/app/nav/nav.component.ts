import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  LOGO = 'Put LOGO';

  serverData: JSON;
  employeeData: JSON;
  employee:JSON;
  user: any;
  pw: any;
  role: any;
  show: boolean;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('cs'))
    if(localStorage.getItem('cs') === 'doctor'){
      this.show = true;
    }
    else{
      this.show = false;
    }
    console.log(this.show)
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(data);
    })
  }

  login(){
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      for (const z in data) {
        if(this.user === data[z][0]){
          if(this.pw === data[z][1]){
            this.role = data[z][2];
          }
        }  
      }
      if(!this.role){
        console.log("None")
      }
      else{
        localStorage.setItem('cs',this.role);
      }
      this.router.navigate([''])
    }) 
  }

  logout(){
    localStorage.setItem('cs',null);
    this.show = true;
    this.router.navigate([''])
  }

}

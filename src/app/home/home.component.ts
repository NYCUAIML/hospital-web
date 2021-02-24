import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    if(localStorage.getItem('cs') === 'null'){
      this.show = true;
    }
    else{
      this.show = false;
    }
    console.log(this.show)
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
        this.show = false;
      }
      window.location.reload();
      this.router.navigate(['']);
    }) 
  }

  logout(){
    localStorage.setItem('cs',null);
    this.show = true;
    window.location.reload();
    this.router.navigate(['']);
  }

}

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formbuilder';
  show: boolean;

  ngOnInit(){
     if(localStorage.getItem('cs') == null){
       this.show = true;
     }
     else{
       this.show = false;
     }
  }
}

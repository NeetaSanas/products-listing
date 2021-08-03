import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  currentUser: string | null;

  ngOnInit(){
    console.log("app component");
    console.log(localStorage.getItem("user"));
    this.currentUser = localStorage.getItem("user");
  }

  logout(){
    localStorage.removeItem("user");
  }
  
}

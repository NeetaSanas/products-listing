import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  currentUser: string | null;
  
  themeText: string ="Dark";

  constructor(private el: ElementRef, private renderer: Renderer2){}

  ngOnInit(){
    console.log("app component");
    console.log(localStorage.getItem("user"));
    this.currentUser = localStorage.getItem("user");
  }

  logout(){
    localStorage.removeItem("user");
  }

  toggleTheme() {
    //INCOMPLETE NEEDS IMPROVEMENTS
    if(this.themeText == 'Dark'){
      this.themeText = "Light";
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'black');
    }else{
      this.themeText = "Dark";
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'white');
    }
  }
  
}

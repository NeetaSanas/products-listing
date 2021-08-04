import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;
  resize: Subscription;
  themeText: string ="Dark";
  currentUser: string | null;
  /**
   * Listens for a click in document and then check for isOpen to be true.
   * If so, then close it
   */
  @HostListener("document:click", ["$event"]) onClick(event:any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.checkIfNavDropDown();
    }
  }

  constructor(private elementRef: ElementRef, private el: ElementRef, private renderer: Renderer2) {}

  

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

  ngOnDestroy() {
    /**
     * It's a good habit to unsubscribe from observable event to prevent memory leak. If your application create 
     * streams without cleaning up it can be a memory hog and will eventually crash. 
     */
    this.resize.unsubscribe();
  }

  ngOnInit() {
    /**
     * Although the application doesn't use this.resize. it is used for unsubscribing (memory cleanup)
     */
    this.resize = fromEvent(window, "resize")
      .pipe(
        throttleTime(500),
        filter(() => !!this.elementRef)
      )
      .subscribe(() => this.checkIfNavDropDown());

      console.log("app component");
      console.log(localStorage.getItem("user"));
      this.currentUser = localStorage.getItem("user");
  }

  checkIfNavDropDown() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  onMenu() {
    this.isOpen = !this.isOpen;
  }

}

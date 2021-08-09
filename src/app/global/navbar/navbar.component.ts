import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';
import { AuthEffects } from 'src/app/login/auth.effects';
import { AuthService } from 'src/app/login/auth.service';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isOpenMenu = false;
  resize: Subscription;
  themeText: string ="DARK";
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

  constructor(private elementRef: ElementRef, private el: ElementRef, 
    private renderer: Renderer2, public dialog: DialogService, 
    private authService: AuthService) {}

  

  logout(){
    localStorage.removeItem("user");
  }

  toggleTheme() {
    //INCOMPLETE NEEDS IMPROVEMENTS
    if(this.themeText == 'DARK'){
      this.themeText = "LIGHT";
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'black');
    }else{
      this.themeText = "DARK";
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
  onSettings(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  onProfileSetting(){
    console.log(this.currentUser);
    this.authService.login().subscribe(data=>{
      console.log(data);
      let usersData:any = data;
      let user ;
      for(let i=0; i<usersData.length;i++){
        if(this.currentUser == usersData[i]["email"]){
          user = usersData[i]
        }
      }

      const ref = this.dialog.open(SignupComponent, {
        data: user
      });
  
      ref.afterClosed.subscribe(result => {
        console.log('Dialog closed', result);      
      });
    });
    
  
  }

}

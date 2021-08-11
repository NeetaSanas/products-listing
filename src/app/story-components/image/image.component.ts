import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input()
  imgSrc:string = '/assets/flower.jpg';

  @Input()
  altTxt?:string = 'Testing Image';

  @Input()
  figCaptionTxt?: string = 'Testing image description text......Testing image description text......Testing image description text......Testing image description text......Testing image description text......Testing image description text......Testing image description text......Testing image description text......Testing image description text......';

  @Input()
  imgOpacity?: number=1;

  constructor() { }


}

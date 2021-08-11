import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() label = 'Checkbox';
  @Input() primary = false;
  @Input() disabled = true;


    public get classes(): string[] {
        const mode = this.primary ? 'btn-primary' : 'btn-secondary';
        const disble = this.disabled ? 'disabled' : '';

        return ['form-check-input', mode, disble];
      }

      public get class(): string[] {
        const mode = this.primary ? 'btn-primary' : 'btn-secondary';
       

        return ['form-check-input', mode];
      }
}

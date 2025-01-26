import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {
@ViewChild("element") element! :ElementRef;

tab():void{
  this.element.nativeElement.classList.toggle("hidden");
}
}

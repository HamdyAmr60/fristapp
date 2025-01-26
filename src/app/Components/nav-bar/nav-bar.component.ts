import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DropDownComponent } from "../drop-down/drop-down.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DropDownComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isSmall:boolean = true;

  }

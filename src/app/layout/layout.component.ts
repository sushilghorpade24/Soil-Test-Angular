import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgClass,NgIf,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  } 
  masterSer=inject(MasterService); 
  router=inject(Router)

  onLogOff(){
    localStorage.clear();
    this.router.navigateByUrl('login')
  }
}

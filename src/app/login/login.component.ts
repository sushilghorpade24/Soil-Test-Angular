import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';
import {  CommonModule, NgClass, NgIf } from '@angular/common';
import { user } from '../Model/model';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {

    userName: "",
    password: ""

  }

  newUserObj:user=new user();
  constructor(private http: HttpClient, private service: MasterService) {

  }
  router = inject(Router)
  showLoginForm: boolean = true; // Initially show login form
  showErrorMessage: boolean = false;

  toggleForm(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.showLoginForm = !this.showLoginForm;
  }
  login() {
    debugger;
    this.service.loginUser(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login Sucessfully");
        localStorage.setItem("soilUser", JSON.stringify(res.data))
        this.router.navigateByUrl('layout');
      } else {
        alert(res.message);
      }
    })
  };
  onRegister(){
    this.service.createUser(this.newUserObj).subscribe((res:any)=>{
      if(res.result){
        alert("New User Created Sucessfully");
        this.showLoginForm = !this.showLoginForm;
      }else{
        alert(res.message);
      }
    })
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}

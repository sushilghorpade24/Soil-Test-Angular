import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponse, user } from '../Model/model';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor,NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userList: any = [];
  userObj: user = new user();
  isNewFormVisible = signal<boolean>(false);
  masterSer = inject(MasterService);

  
  ngOnInit() {
    this.getUsers();
  };
  showHideForm() {
    this.isNewFormVisible.set(!this.isNewFormVisible())
  };
  getUsers() {
    this.masterSer.getUsers().subscribe((res: ApiResponse) => {
      if (res.result) {
        this.userList = res.data;
      } else {
        alert(res.message);
      }
    })
  };
  addNewUser() {
    this.masterSer.createUser(this.userObj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert("New User Created Sucessfully");
        this.getUsers();
      } else {
        alert(res.message);
      }
    })
  };
  onEdit(data: any) {
    this.userObj = data;
    this.isNewFormVisible.set(!this.isNewFormVisible());
  };
  onUserUpadte() {
    this.masterSer.updateUsers(this.userObj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert("User Updated Sucessfully");
        this.getUsers();
      } else {
        alert(res.message)
      }
    })
  };
  deleteUsers(id: any) {
    const isDelete = confirm("Are You Sure To Delete User ?");
    if (isDelete) {
      this.masterSer.deleteUser(id).subscribe((res: ApiResponse) => {
        if (res.result) {
          alert("User Deleted Sucessfully.");
          this.getUsers();
        } else {
          alert(res.message);
        }
      })
    }
  }

}

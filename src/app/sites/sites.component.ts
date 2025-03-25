import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../master.service';
import { ApiResponse } from '../Model/model';
import { error } from 'console';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {
  isNewFormIsVisible: boolean = false;
  masterSer = inject(MasterService)
  siteList$: Observable<any[]> = new Observable<any[]>;

  sitrForm: FormGroup = new FormGroup({
    siteId: new FormControl(0),
    siteName: new FormControl(""),
    location: new FormControl(""),
    clientName: new FormControl(""),
    weatherConditions: new FormControl(""),
    createdDate: new FormControl(new Date())
  });

  constructor() {
    this.siteList$ = this.masterSer.getSites();
  }

  showHideForm() {
    this.isNewFormIsVisible = !this.isNewFormIsVisible;
  };

  onSave() {
    const FromValue = this.sitrForm.value;
    this.masterSer.createSite(FromValue).subscribe((res: ApiResponse) => {
      // if(res.result){
      //   alert("New Site Created Sucessfully");
      // }else{
      //   alert(res.message);

      // }
      alert("New Site Created Sucessfully");
    }, error => {
      alert("Error From Api")
    })
  };
  onEdit(data: any) {
    this.masterSer.onEditSite(data).subscribe((res: any) => {
      this.sitrForm = res.data;
      this.isNewFormIsVisible = !this.isNewFormIsVisible;
    }, error => {
      alert("Error From Api");
    })

  }
  onDelete(Id: any) {
    const isDelete = confirm("Are You Sure About Delete Site?");
    if (isDelete) {
      this.masterSer.deleteSite(Id).subscribe((res: any) => {

        alert("Site Deleted Sucessfully");
        this.siteList$ = this.masterSer.getSites();


      }, error => {
        alert("Error From Api");
      })
    }
  }
}

import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MasterService } from '../master.service';
import { error } from 'console';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Measurement, Test } from '../Model/model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isNewTest: boolean = true;
  siteList$: Observable<any[]> = new Observable<any[]>;
  userList$: Observable<any[]> = new Observable<any[]>;
  testTypes$: Observable<any[]> = new Observable<any[]>;
  masterSer = inject(MasterService);
  testList: any[] = [];
  measurementList: any[] = [];
  activeTest: number = 0;

  testObj: Test = new Test();
  measurementObj: Measurement = new Measurement();
  constructor() {
    this.siteList$ = this.masterSer.getSites();
    this.userList$ = this.masterSer.getUsers().pipe(map((res: any) => res.data));
    this.testTypes$ = this.masterSer.fetchAllTestTypes();


  }
  ngOnInit() {
    this.getAllTest();
  }

  onSaveTest() {
    this.masterSer.createTest(this.testObj).subscribe((res: any) => {
      alert("Test Created Sucessfully");
    }, error => {
      alert("Error from Api")
    })
  };
  getAllTest() {
    this.masterSer.getAllTests().subscribe((res: any) => {
      this.testList = res;
    }, error => {
      alert("Error From Api");
    })
  }

  toggleTestForm() {
    this.isNewTest = !this.isNewTest;
  };
  setActiveTest(id: number) {
    this.activeTest = id;
   this.getMeasurementByTestId()
  };

  addMeasurements() {
    this.measurementObj.testId = this.activeTest;
    this.masterSer.createMeasurements(this.measurementObj).subscribe((res: any) => {
      alert("Measurement Created Sucessfully");
      this.getMeasurementByTestId();
    }, error => {
      alert("Error from Api")
    })
  };

  getMeasurementByTestId() {
    this.masterSer.getAllMeasurementsByTestId(this.activeTest).subscribe((res: any) => {
      this.measurementList = res;
    }, error => {
      alert("Error From Api")
    })

  };
//   deleteMeasurementById(Id: any) {
//     const isDelete = confirm("Are you sure you want to delete this measurement?");
//     if (isDelete) {
//         this.masterSer.deleteMesurementBy_Id(Id).subscribe({
//             next: (res: any) => {
//                 if (res.result === true) {
//                     alert("Measurement deleted successfully.");
//                 } else {
//                     alert("Error: Unable to delete measurement.");
//                 }
//             },
//             error: (err) => {
//                 console.error("Error deleting measurement:", err);
//                 alert("An error occurred while deleting the measurement.");
//             }
//         });
//     }
// }
onEdit(data:any){
this.measurementObj=data;
};
// updateMeasurements(){
//   // this.measurementObj.testId = this.activeTest;
//   this.masterSer.createMeasurements(this.measurementObj).subscribe((res: any) => {
//     alert("Measurement Created Sucessfully");
//     this.getMeasurementByTestId();
//   }, error => {
//     alert("Error from Api")
//   })
// }
}

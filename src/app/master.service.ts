import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADD_MEASURMENTS, CREATE_TEST, CREATE_USER, CRETAE_SITE, DELETE_MEASUREMENT_BY_ID, DELETE_SITE, DELETE_USER, GET_ALL_MEASUREMENTS_BY_TEST_ID, GET_ALL_SITE, GET_ALL_TEST, GET_ALL_TEST_TYPES, GET_ALL_USERS, GET_SITE_BY_ID, LOGIN, UPDATE_USER } from './constant/constant';
import { Observable } from 'rxjs';
import { ApiResponse } from './Model/model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  CommonApiUrl = "https://projectapi.gerasim.in/api/SoilTest/";
  loggedUserData: any;
  constructor(private http: HttpClient) {
    const loggedData = localStorage.getItem('soilUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData)
    }
  };

  loginUser(obj: any) {
    return this.http.post(this.CommonApiUrl + LOGIN, obj);
  };
  getUsers():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.CommonApiUrl + GET_ALL_USERS);
  };
  createUser(obj:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.CommonApiUrl+CREATE_USER,obj);
  }
  updateUsers(obj: any):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.CommonApiUrl + UPDATE_USER, obj);
  };
  deleteUser(id: any):Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.CommonApiUrl + DELETE_USER + id);
  };

  //Site Api Service

  createSite(obj:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.CommonApiUrl+CRETAE_SITE,obj);
  };
  getSites():Observable<any[]> {
    return this.http.get<any[]>(this.CommonApiUrl + GET_ALL_SITE);
  };
  deleteSite(id: any){
    return this.http.delete(this.CommonApiUrl + DELETE_SITE + id);
  };
  onEditSite(id:any){
    return this.http.get(this.CommonApiUrl+GET_SITE_BY_ID+id);
  };

  fetchAllTestTypes():Observable<any[]>{
    return this.http.get<any[]>(this.CommonApiUrl+GET_ALL_TEST_TYPES);
  };
  createTest(obj:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.CommonApiUrl+CREATE_TEST,obj);
  };
  getAllTests():Observable<any[]> {
    return this.http.get<any[]>(this.CommonApiUrl + GET_ALL_TEST);
  };
  createMeasurements(obj:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.CommonApiUrl+ADD_MEASURMENTS,obj);
  };

  getAllMeasurementsByTestId(testId:number):Observable<any[]> {
    return this.http.get<any[]>(this.CommonApiUrl + GET_ALL_MEASUREMENTS_BY_TEST_ID+testId);
  };
  deleteMesurementBy_Id(id:any){
    return this.http.delete(this.CommonApiUrl+DELETE_MEASUREMENT_BY_ID+id);
  }
  update_Measurements(obj:any){
    
  }


}

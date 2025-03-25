export class user {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    password: string;
    constructor(){
        this.emailId='';
        this.fullName='';
        this.userName='';
        this.password='';
        this.userId=0;
      }
  };

  export class Test {
     testId: number;
     siteId: number;
     engineerId: number;
     testTypeId: number;
     testDate: string;
     remarks: string;
     approvalStatus: string;
     createdDate: string;
     testName: string;
  
    constructor() {
      this.testId = 0;
      this.siteId = 0;
      this.engineerId = 0;
      this.testTypeId = 0;
      this.testDate = '';
      this.remarks = '';
      this.approvalStatus = '';
      this.createdDate = new Date().toISOString();
      this.testName = '';
    }
  };

  export class Measurement {
     measurementId: number;
     testId: number;
     excavatedHoleVolume: number;
     wetSoilWeight: number;
     moistureContent: number;
     drySoilWeight: number;
     sandVolumeUsed: number;
     dryDensity: number;
     soilClassification: string;
     createdDate: string;
  
    constructor() {
      this.measurementId = 0;
      this.testId = 0;
      this.excavatedHoleVolume = 0;
      this.wetSoilWeight = 0;
      this.moistureContent = 0;
      this.drySoilWeight = 0;
      this.sandVolumeUsed = 0;
      this.dryDensity = 0;
      this.soilClassification = '';
      this.createdDate = new Date().toISOString();
    }
  }
  
  
  
  export interface userList{
    userId: number,
    userName: string,
    emailId: string,
    fullName: string ,
    role: string,
    createdDate: string,
    password: string,
    projectName: string,
    refreshToken:string,
    refreshTokenExpiryTime: string
  }
  export interface ApiResponse {
    message:string,
    result:boolean,
    data:any
  }
  
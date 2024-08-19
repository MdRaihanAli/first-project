export interface TUserName {
  firstName: string;
  middleName: string; 
  lastName: string;  
}

export interface TLocalGurdian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface TGurdian {
  fatherName: string;
  lastName: string;
  contactNo: string;
  motherName: string;
}

export interface TStudent {
  id: string;
  password: string;
  name: TUserName;
  email: string;
  gender: "male" | "female";
  contactNo?: string;
  bloodGroup?: "A+" | "A-" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  parentAddress: string;
  gurdian: TGurdian;
  localgurdian: TLocalGurdian;
  profileImg: string;
  isActive: "active" | "inActive";
  isDelete: boolean
}

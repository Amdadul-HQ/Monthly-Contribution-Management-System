export interface PersonalInfo {
  name: string;
  fatherName: string;
  motherName: string;
  address: string;
  occupation: string;
  email: string;
  phone: number; // if received from req.body, prefer `string`
  nid: number;
  joiningDate: string; // ISO string from frontend, can convert to Date later
  referenceName: string;
  senderPhoneNumber: number;
}

export interface PersonalInfoStates {
  monthlyDeposit: number;
  registrationFee: number;
  paymentMethod: string;
}

export interface Credentials {
  name: string;
  email: string;
  phone: number;
  password: string;
}
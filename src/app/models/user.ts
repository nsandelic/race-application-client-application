export interface User {
    id: string;
    firstName: string;
    lastName: string; 
    email: string;
    dob: string;
    role: 'Applicant' | 'Administrator';
  }
  
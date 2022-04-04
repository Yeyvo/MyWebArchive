export interface User{
  uid: string;
  email: string;
  displayName?: string;
  permissionLevel?: number;
  ImageURL?: string;
  isTeacher: boolean;
}

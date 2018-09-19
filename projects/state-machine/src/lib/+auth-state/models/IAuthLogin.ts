
  import { IAppUser } from './IAppUser';
  export interface IAuthLogin extends IAppUser {
    username: string;
    password?: string;
    isAuthenticated?: boolean;
    token?: string;
  }

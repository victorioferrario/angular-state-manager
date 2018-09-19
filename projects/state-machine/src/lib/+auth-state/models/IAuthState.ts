
import { IAuthLogin } from './IAuthLogin';
import { ISystemMessage } from './ISysMessage';
export interface IAuthState {
    user: IAuthLogin | null;
    error: string | null;
    isLoaded?: boolean;
    isAuthenticated?: boolean;
    systemMessage?: ISystemMessage;
}

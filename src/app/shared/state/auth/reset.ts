export const LOG_OUT = 'LOG_OUT';
export interface AuthState {
    username: string;
    loggedin: boolean;
  }

export function reset(reducer) {
  return function newReducer(state, action) {
    if (action.type === LOG_OUT) {
      state = undefined;
    }
    const nextState = reducer(state, action);
    return nextState;
  };
}

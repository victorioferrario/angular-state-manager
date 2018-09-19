import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../src/environments/environment';
import { RouterStateUrl } from '../common';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApplication from './app.reducers';

export interface IState {
    application: fromApplication.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
    application: fromApplication.reducer,
    routerReducer: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
    return function (state: IState, action: any): IState {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}
export const metaReducers: MetaReducer<IState>[] = !environment.production
    ? [logger, storeFreeze]
    : [];

    // Application state
export const getApplicationState = createFeatureSelector<
    fromApplication.State>('application');
// Application selectors
export const getNetworkConnectionStatus = createSelector(
    getApplicationState,
    fromApplication.getNetworkConnectionStatus);

export const getSplashScreenStatus = createSelector(
    getApplicationState, fromApplication.getSplashScreenStatus);
export const getShowSidenav = createSelector(getApplicationState, fromApplication.getShowSidenav);


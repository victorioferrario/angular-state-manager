import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromApp from './language.actions';
import { LanguageActionTypes, LanguageActionsUnion } from './language.actions';
import { environment } from '../../../../environments/environment';


export const metaReducers: MetaReducer<fromApp.AppState>[] = !environment.production ? [] : [];

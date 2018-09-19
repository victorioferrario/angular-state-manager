import { Action } from '@ngrx/store';
export interface AppState {
  language: LanguageTypes | null;
  message: string;
}
export class InstanceOfAppState implements AppState {
  language: LanguageTypes | null;
  message: string;
}
export enum LanguageTypes {
  ENGLISH = 'ENGLISH',
  FRENCH = 'FRENCH',
  SPANISH = 'SPANISH',
  RUSSIAN = 'RUSSIAN'
}
export enum LanguageActionTypes {
  ENGLISH = 'ENGLISH',
  FRENCH = 'FRENCH',
  SPANISH = 'SPANISH',
  RUSSIAN = 'RUSSIAN'
}
export class SpeakLanguage implements Action {
  constructor(public type: LanguageActionTypes) {}
}
export class SpeakEnglish implements Action {
  readonly type = LanguageActionTypes.ENGLISH;
  constructor(/*public payload: number*/) {}
}
export class SpeakFrench implements Action {
  readonly type = LanguageActionTypes.FRENCH;
  constructor(/*public payload: number*/) {}
}
export class SpeakSpanish implements Action {
  readonly type = LanguageActionTypes.SPANISH;
  constructor(/*public payload: number*/) {}
}
export type LanguageActionsUnion =
  | SpeakEnglish
  | SpeakFrench
  | SpeakSpanish
  | SpeakLanguage;
export function simpleReducer(
  state: AppState = {
    message: 'hello',
    language: LanguageTypes.ENGLISH
  },
  action: LanguageActionsUnion
) {
  switch (action.type) {
    case LanguageActionTypes.ENGLISH:
      return (state = {
        message: 'HELLO WORLD',
        language: LanguageTypes.ENGLISH
      });
    case LanguageActionTypes.SPANISH:
      return (state = {
        message: 'Hola Mundo',
        language: LanguageTypes.SPANISH
      });
    case LanguageActionTypes.FRENCH:
      return (state = {
        message: 'Bonjour le monde',
        language: LanguageTypes.FRENCH
      });
    case LanguageActionTypes.RUSSIAN:
      return (state = {
        message: 'Привет мир',
        language: LanguageTypes.RUSSIAN
      });
  }
}

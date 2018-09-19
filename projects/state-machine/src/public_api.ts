/*
 * Public API Surface of state-machine
 */

export * from './lib/state-machine.service';
export * from './lib/state-machine.component';
export * from './lib/state-machine.module';
export * from './lib/+app-state';
import * as fromAuth from './lib/+auth-state';
export const toAuth = fromAuth;

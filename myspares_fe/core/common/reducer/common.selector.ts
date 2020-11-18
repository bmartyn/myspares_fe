import { createSelector } from 'reselect';

import * as fromWishlist from './common.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.common;
export const getProfile = createSelector(
  getState,
  fromWishlist.getProfile
);
export const getProfileValid = createSelector(
  getState,
  fromWishlist.getProfileValid
);

export const profileLoading = createSelector(
  getState,
  fromWishlist.getProfileLoading
);
export const profileLoaded = createSelector(
  getState,
  fromWishlist.getProfileLoaded
);
export const profileFailed = createSelector(
  getState,
  fromWishlist.getProfileFailed
);

import { Map, Record } from 'immutable';
import { ProfileModel } from '../models/profile.model';

export interface CommonState extends Map<string, any> {
  profile: ProfileModel;

  getProfileLoading: boolean;
  profileValid: boolean;
  getProfileLoaded: boolean;
  getProfileFailed: boolean;
}

export const CommonRecord = Record({
  profile: null,

  profileValid: false,
  getProfileLoading: false,
  getProfileLoaded: false,
  getProfileFailed: false,
});

import { ERROR_MESSAGES } from './config';
const GOOGLE_DRIVE_URL = 'https://docs.google.com/uc?export=download&';

export const escapeGoogleAuthUrl = (fileId = '') =>
  fileId && `${GOOGLE_DRIVE_URL}id=${fileId}`;

export const shouldActivate = isActive => (isActive ? 'active' : '');

export const getMusicPlayerAlertMessage = (musicPlayer, track) => {
  const { LOAD, NO_TRACK } = ERROR_MESSAGES;
  const shouldShowLoadMessage = musicPlayer.src.includes(track && track.id);
  return shouldShowLoadMessage ? LOAD : NO_TRACK;
};

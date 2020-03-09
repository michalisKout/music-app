const GOOGLE_DRIVE_URL = 'https://docs.google.com/uc?export=download&';

export const escapeGoogleAuthUrl = (fileId = '') =>
  fileId && `${GOOGLE_DRIVE_URL}id=${fileId}`;

export const shouldActivate = isActive => (isActive ? 'active' : '');

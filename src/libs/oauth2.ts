/* eslint-disable @typescript-eslint/no-unused-vars */
import { OAuthProvider } from 'appwrite';
import { account } from 'src/boot/appwrite';

import { useRouter } from 'vue-router';

const router = useRouter();

// Auflösung der benannten Route zu absoluter URL
const successURL =
  window.location.origin + router.resolve({ name: 'OAuthSuccess' }).href;
const failureURL =
  window.location.origin + router.resolve({ name: 'OAuthFailure' }).href;

// Go to OAuth provider login page
account.createOAuth2Session(
  OAuthProvider.Google,
  successURL,
  failureURL,
  ['email', 'profile'] // optional
);

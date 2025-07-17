/* eslint-disable @typescript-eslint/no-unused-vars */
import { OAuthProvider } from 'appwrite';
import { account } from 'src/boot/appwrite';
import { resolveRouteURL } from 'src/libs/resolveUrl';
import { useRouter } from 'vue-router';

const router = useRouter();

export interface OAuth2SessionOptions {
  provider: OAuthProvider;
  successUrl: string;
  failureUrl: string;
  scopes?: string[];
}

// Auflösung der benannten Route zu absoluter URL
// const successURL =
//   window.location.origin + router.resolve({ name: 'OAuthSuccess' }).href;
// const failureURL =
//   window.location.origin + router.resolve({ name: 'OAuthFailure' }).href;

const successURL = resolveRouteURL(router, 'OAuthSuccess');
const failureURL = resolveRouteURL(router, 'OAuthFailure');

// Go to OAuth provider login page
account.createOAuth2Session(
  OAuthProvider.Google,
  successURL,
  failureURL,
  ['email', 'profile'] // optional
);
// ------------------------------------ //
class OAuth2Session {
  provider: OAuthProvider;

  successUrl: string;

  failureUrl: string;

  scopes: string[];

  constructor(options: OAuth2SessionOptions) {
    this.provider = options.provider;
    this.successUrl = options.successUrl || successURL;
    this.failureUrl = options.failureUrl || failureURL;
    this.scopes = options.scopes || [];
  }

  async signin() {
    try {
      await account.createOAuth2Session(
        this.provider,
        this.successUrl,
        this.failureUrl,
        this.scopes
      );
    } catch (error) {
      console.error('OAuth2 session error:', error);
    }
  }
}

import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function resolveRouteURL(
  router: ReturnType<typeof useRouter>,
  routeName: string
): string {
  return window.location.origin + router.resolve({ name: routeName }).href;
}

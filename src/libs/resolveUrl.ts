import { Router } from 'vue-router';

/**
 * Gibt eine absolute URL zu einer benannten Route zurück.
 * @param router - Der Vue Router-Instanz
 * @param routeName - Der Name der Route
 * @param originOverride - Optional: z.B. für SSR oder Testumgebungen
 * @param params - Optional: Routenparameter
 */
export function resolveRouteURL(
  router: Router,
  routeName: string,
  originOverride?: string,
  params: Record<string, string | number> = {}
): string {
  const origin =
    originOverride ||
    (typeof window !== 'undefined' ? window.location.origin : '');

  const resolved = router.resolve({ name: routeName, params });

  return origin + resolved.href;
}

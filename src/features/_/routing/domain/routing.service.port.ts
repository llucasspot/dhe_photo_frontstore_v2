export const routes = {
  root: '/',
  authRoot: '/auth',
  login: '/auth/login',
  home: '/home',
} as const;

export type Route = (typeof routes)[keyof typeof routes];

export abstract class RoutingServicePort {
  abstract redirect(
    path: Route,
    params?: Record<string, string>,
  ): Promise<void>;

  abstract usePathname(): string;
}

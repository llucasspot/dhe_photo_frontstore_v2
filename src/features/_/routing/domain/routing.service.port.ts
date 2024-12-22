export const routes = {
  root: '/',
  authRoot: '/auth',
  login: '/auth/login',
} as const;

export type Route = (typeof routes)[keyof typeof routes];

export abstract class RoutingServicePort {
  abstract redirect(
    path: Route,
    params?: Record<string, string>,
  ): Promise<void>;

  abstract usePathname(): string;
}

import {
  createRootRouteWithContext,
  createRoute,
} from '@tanstack/react-router';

import { AuthService } from '#features/auth/domain';
import { SignInPage } from '#features/auth/react';
import { HomePage } from '#features/home/react';
import { OutletLayout, RootLayout } from '#layout';
import { RoutingServicePort } from '#routing/domain';

type Context = {
  routingService: RoutingServicePort;
  authService: AuthService;
};

export const rootRoute = createRootRouteWithContext<Context>()({
  component: OutletLayout,
});

// ----- authLayout -----

export const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: OutletLayout,
});

export const signInRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/login',
  component: SignInPage,
});

// ----- rootLayout -----

export const rootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: RootLayout,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootLayout,
  path: '/home',
  component: HomePage,
});

// ----- routeTree -----

export const routeTree = rootRoute.addChildren([
  authLayout.addChildren([signInRoute]),
  rootLayout.addChildren([homeRoute]),
]);

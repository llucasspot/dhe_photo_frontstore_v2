import {
  createRootRouteWithContext,
  createRoute,
} from '@tanstack/react-router';

import { OutletLayout, RootLayout } from '#layout';
import { RoutingServicePort } from '#routing/domain';

type Context = {
  routingService: RoutingServicePort;
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

// ----- rootLayout -----

export const rootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: RootLayout,
});

// ----- routeTree -----

export const routeTree = rootRoute.addChildren([
  authLayout.addChildren([]),
  rootLayout.addChildren([]),
]);

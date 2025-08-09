import { ApplicationConfig } from '@angular/core';
import { provideRouter, ROUTER_CONFIGURATION, withComponentInputBinding, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        // scrollOffset: [0, 64],           
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
};

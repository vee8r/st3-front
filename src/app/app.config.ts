import {ApplicationConfig, importProvidersFrom, Provider} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {TokenInterceptor} from "./service/auth/TokenInterceptor";


export const tokenInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    tokenInterceptorProvider
  ]
};

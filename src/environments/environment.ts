// PUT ALL ENVIRONMENT VARIABLES IN THIS FILE AND ALSO IN environment.prod.ts and environment.dev.ts as well
// BUT IN prod.ts and dev.ts, THE VALUE CAN BE DIFFERENT
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  storeUrl: 'http://localhost:8181/ecommerce/api/v1/store/items',
  homeUrl: 'http://localhost:8181/ecommerce/api/v1/home/items'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyC6adlFcW7DzfbmdsrRb9uCxR_h21yS0x4",
    authDomain: "testingweather-c77c9.firebaseapp.com",
    databaseURL: "https://testingweather-c77c9.firebaseio.com",
    projectId: "testingweather-c77c9",
    storageBucket: "testingweather-c77c9.appspot.com",
    messagingSenderId: "228301975950"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

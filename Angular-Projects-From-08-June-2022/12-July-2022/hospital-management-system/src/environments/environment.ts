// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000',
  roles: [
    { _id: '62d661a125b9b64329cb495d', name: 'Admin', route: 'admin' },
    { _id: '62d661a125b9b64329cb495e', name: 'Doctor', route: 'doctor' },
    { _id: '62d661a125b9b64329cb495f', name: 'Nurse', route: 'nurse' },
  ],
  admin: { _id: '62d661a125b9b64329cb495d', name: 'Admin', route: 'admin' },
  doctor: { _id: '62d661a125b9b64329cb495e', name: 'Admin', route: 'admin' },
  nurse: { _id: '62d661a125b9b64329cb495f', name: 'Admin', route: 'admin' },
  statusPending: '62d661a225b9b64329cb4962',
  statusRejected: '62d661a225b9b64329cb4963',
  statusApproved: '62d661a225b9b64329cb4964',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

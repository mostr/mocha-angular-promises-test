### Testing Angular promises with new Mocha (with promises support)

Can't test Angular promise with the new mocha-way, as it is required to call `$scope.$apply()` to resolve/reject promises in Angular and I can see no way to inject this call. 

Old way of testing promises (with `done`) works fine as well as testing regular promises (e.g. Q-based).

##### How to run

1. Call `npm install` first
2. Run Karma server with `node_modules/karma/bin/karma start`
3. Run single test run with `node_modules/karma/bin/karma run`

There is one test failing - one that tries to use new promises support.

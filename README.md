### Testing Angular promises with new Mocha (with promises support)

Can't test Angular promise with the new mocha-way, as it is required to call `$scope.$apply()` to resolve/reject promises in Angular and I can see no way to inject this call. 

Old way of testing promises (with `done`) works fine as well as testing regular promises (e.g. Q-based).

##### How to run

1) Run `karma` server with `node_modules/karma/bin/karma start`
2) Run single test run with `node_modules/karma/bin/karma run`
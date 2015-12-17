1) getValuesFromState should get simple values from state:

Error: Expected { alive: true, catLives: 9, foo: 'bar', notSet: { touched: undefined } } to equal { alive: true, catLives: 9, foo: 'bar' }
+ expected - actual

 {
   "alive": true
   "catLives": 9
   "foo": "bar"
-  "notSet": {
-    "touched": [undefined]
-  }
 }

at Object.assert [as default] (node_modules/expect/lib/assert.js:20:9)
at Expectation.toEqual (node_modules/expect/lib/Expectation.js:69:26)
at Context.<anonymous> (src/__tests__/getValuesFromState.spec.js:14:8)

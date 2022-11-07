# csec302-demo
Demonstrating the Arbitrary Code Injection vulnerability in Underscore v1.8.3

## Installation and running
Clone repo: `git clone`

Open repo and `cd` into `/broken/underscore-1.8.3`

Install required packages: `npm i`

Run main.js: `node main.js`

## Testing
Underscore 1.8.3 is vulnerable to arbitrary code injection via its template function, similarly to lodash. The difference between the two lies within the `variable` option in the templateSettings. This option is not sanitized properly.

The vulnerable code fix is located in /node_modules/underscore/underscore-node-f.cjs, lines 906-916, and is commented out for the purpose of this demo. Prior to this fix, the code only checked if the variable was specified, if it was, it would render with settings.variable directly passed in. With the fix in place, the code now puts the settings variable into a local var variable called `arguments` and gets sanitized before the rendering. The fix calls a function found in `lib.es5.d.ts` called `test` that compares the types of what is allowed vs not allowed. If the test fails to pass, an error is thrown and the program exits.

### Additional Info
More about [Underscore templates](https://underscorejs.org/#template)

More about [CVE-2021-23358](https://security.snyk.io/vuln/SNYK-JS-UNDERSCORE-1080984)

More about the [fix](https://github.com/jashkenas/underscore/commit/4c73526d43838ad6ab43a6134728776632adeb66)
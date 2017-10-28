# Puppeteer Logins

Approaches to using Puppeteer in E2E tests. Some are using TypeScript

## Content

### Login

A sample implementation of login (signing in) user path. It uses BitBucket web site.

### Jest Tests

A BitBucket user signing path scripted as E2E tests with Jest. The Jest TypeScript builtin preprocessor is used.

```bash
➜  jest-test git:(master) ✗ yarn test
yarn test v1.0.2
$ jest
 PASS  __tests__/index.test.ts

 RUNS  __tests__/login.test.ts

Test Suites: 1 passed, 1 of 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        9s, estimated 11s
████████████████████████████████████████
```

```bash
➜  jest-test git:(master) ✗ yarn test
yarn test v1.0.2
$ jest
 PASS  __tests__/index.test.ts
 PASS  __tests__/login.test.ts (9.519s)

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        10.285s, estimated 11s
Ran all test suites.
```

## Author

@peterblazejewicz

/*
001 - Intro

This is to test the setup of the system. This test should fail when running the
tests with `npm run test`. Make sure that the test fails before continuing.

Then, change the return value of `main` to any number. Run the tests again and
this test should pass.
*/

export function main(): null | number {
  return 42;
}

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("main() returns any number", (t) => {
  assert.equal(typeof main(), "number");
});

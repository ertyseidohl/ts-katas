/*
003 - Async

Async functions should return a Promise. Fix the function below so the tests
pass.
*/

function main(): { n: number; s: string; b: boolean } {
  return {
    n: 42,
    s: "Hello",
    b: true,
  };
}

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("main() returns an object with a number, string, and boolean", async (t) => {
  assert.equal(typeof main().n, "number");
  assert.equal(typeof main().s, "string");
  assert.equal(typeof main().b, "boolean");
});

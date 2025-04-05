/*
003 - Async

Async functions should return a Promise. Fix the function below so the tests
pass.
*/

async function test_1(): Promise<number> {
  return 42;
}

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns any number as a promise", async () => {
  assert.equal(typeof (await test_1()), "number");
});

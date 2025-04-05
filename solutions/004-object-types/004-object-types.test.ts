/*
004 - Object types

You can define object value types inline, or use an interface. Fix the functions
below so that the tests pass.
*/

function test_1(): { n: number; s: string; b: boolean } {
  return {
    n: 42,
    s: "7",
    b: true,
  };
}

// Do not modify the interface below. Modify the code in test_2 instead.
interface I {
  a: number;
  b: number;
}

function test_2(): I {
  return {
    a: 4,
    b: 4,
  };
}

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1() returns an object with a number, string, and boolean", async (t) => {
  assert.equal(typeof test_1().n, "number");
  assert.equal(typeof test_1().s, "string");
  assert.equal(typeof test_1().b, "boolean");
});

test("test_2() returns an object matching the interface I", async (t) => {
  assert.equal(Object.keys(test_2()).sort(), ["a", "b"]);
  assert.equal(typeof test_2().a, "number");
  assert.equal(typeof test_2().b, "number");
});

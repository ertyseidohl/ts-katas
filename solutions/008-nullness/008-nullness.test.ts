/*
008 - Nullness

! and ? provide nullness assertions, but no actual nullness checking.
*/

// Fix this by adding a single "?" character.
function test_1(input?: number): string {
  if (input === undefined) {
    return "no"
  }
  return "yes"
}

// "Fix" this by adding a single "!" character.
function test_2(input?: number | null): number {
  return input!;
}

// Fix this by adding a nullness check to the function.
function test_3(input?: number | null): number {
  if (input === null || input === undefined) {
    return 0;
  }
  return input;
}

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns 'no' for undefined and 'yes' for all other values", () => {
  assert.equal(test_1(42), "yes");
  assert.equal(test_1(undefined), "no");
});

test("test_2 returns the value provided", () => {
  assert.equal(test_2(42), 42);
  assert.equal(test_2(null), null);
  assert.equal(test_2(undefined), undefined);
});

test("test_3 returns the value provided, or 0 if null/undefined", () => {
  assert.equal(test_3(42), 42);
  assert.equal(test_3(null), 0);
  assert.equal(test_3(undefined), 0);
});

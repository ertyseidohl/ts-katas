/*
005 - Union

Values with a union type can be any value contained within the union. Fix the
functions below so that the tests pass.

You can define a union type inline, or as a type alias.
*/

function test_1(input: string | number): string {
  if (typeof input === "number") {
    return input.toString().toUpperCase();
  }
  return input.toUpperCase();
}

function test_2(input: string | number): string | number {
  if (typeof input === "number") {
    return input;
  }
  return input.toUpperCase();
}

// Do not modify the type below. Modify the code in test_3 instead.
type T = boolean | null;

function test_3(input: string): T {
  if (input == "true") {
    return true;
  }
  if (input == "false") {
    return false;
  }
  return null;
}

function test_4(x: string[] | string) {
  if (Array.isArray(x)) {
    return x.join("");
  }
  return x;
}

// Fix this type to be a union of all the possible values returned by test_5.
// You can solve this using `any`, but try to use a union type instead.
type X = number | string | boolean | null | undefined;

/* DO NOT EDIT BELOW THIS LINE */

function test_5(input: any): X {
  if (typeof input == "string") {
    return "";
  }
  if (typeof input == "number") {
    if (isNaN(input)) {
      return NaN;
    }
    return 0;
  }
  if (typeof input == "boolean") {
    return false;
  }
  if (input === undefined) {
    return undefined;
  }
  return null;
}

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns the uppercase version of a string or number", async (t) => {
  assert.equal(test_1("abc"), "ABC");
  assert.equal(test_1(123), "123");
});

test("test_2 returns the uppercase version of a string or number as the original type", async (t) => {
  assert.equal(test_2("abc"), "ABC");
  assert.equal(test_2(123), 123);
});

test("test_3 should return the boolean representing the input string, or null", async (t) => {
  assert.equal(test_3("true"), true);
  assert.equal(test_3("false"), false);
  assert.equal(test_3("null"), null);
});

test("test_4 should return the input as a string or string array", async (t) => {
  assert.equal(test_4("abc"), "abc");
  assert.equal(test_4(["abc", "def"]), "abcdef");
});

test("test_5 should return falsy values or null", async (t) => {
  assert.equal(test_5("abc"), "");
  assert.equal(test_5(123), 0);
  assert.equal(test_5(true), false);
  assert.equal(test_5(undefined), undefined);
  assert.equal(isNaN(test_5(NaN) as number), true);
  assert.equal(test_5({}), null);
});

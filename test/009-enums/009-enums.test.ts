/*
009 - Enums

Enums are a special type in TypeScript that allow you to define a set of named
constants.
*/

enum A {}

function b() {}

enum C {}

enum D {}

enum E {
  A,
  B,
}

/* DO NOT EDIT BELOW THIS LINE */

function test_1(input: A): A {
  return input + 1;
}

enum B {
  A = b(1),
  B = b(2),
}

function d(input: { A: number }): number {
  return input.A + 10;
}

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns the next value in A", () => {
  assert.equal(test_1(A.A), A.B);
  assert.equal(test_1(A.B), 2);
});

test("test_2 returns the next value in B", () => {
  assert.equal(B.A, 2);
  assert.equal(B.B, 4);
});

test("test_3 values of C.A and C.B are strings AAA and BBB, respectively", () => {
  assert.equal(C.A, "AAA");
  assert.equal(C.B, "BBB");
});

test("test_4 Enum D can be used as an object parameter to function d", () => {
  assert.equal(d(D), 11);
});

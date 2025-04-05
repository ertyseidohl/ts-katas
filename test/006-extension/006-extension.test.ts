/*
006 - Extension

Types and interfaces can be extended, which allows you to create new types and
interfaces based on existing ones.

Create a new interface B that extends A, and a new type U that extends T.
*/

import { A, T } from "./006-types";

/* DO NOT EDIT BELOW THIS LINE */

function test_1(input: A): B {
  return {
    a: input.a,
    b: input.a,
  };
}

function test_2(input: T): U {
  return {
    x: input.x,
    y: input.x,
  };
}

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 copies the value in input.a in an object as properties a and b", async (t) => {
  assert.deepStrictEqual(test_1({ a: 42 }), { a: 42, b: 42 });
});

test("test_2 copies the value in input.x in an object as properties x and y", async (t) => {
  assert.deepStrictEqual(test_2({ x: 42 }), { x: 42, y: 42 });
});

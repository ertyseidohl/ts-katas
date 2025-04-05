/*
007 - Literals

Literal types provide a specific set of values that a variable can take.
*/
import { A, B, h, r } from "./007-types";

// Edit type X to be a literal type of only the values that it can take.
type X = "a" | "b" | null;

// Edit type Y to be a literal type of only the values that it can take.
type Y = {
  a: ["x"],
  b: "y"
};

// Edit this call to `h` so that it passes type checking.
h(r.input as "G" | "H");

// Edit `u` to pass type checking.
const u: { j: "J" | "K" } = { j: "J" };

/* DO NOT EDIT BELOW THIS LINE */

function test_1(input: A | B): X {
  if (input == "a") {
    return "a";
  } else if (input == "b") {
    return "b";
  }
  return null;
}

function test_2(): Y {
  return {
    a: ["x"],
    b: "y",
  };
}

function test_3(j: "J" | "K"): void {
  return;
}

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns 'a' and 'b', or null", () => {
  assert.equal(test_1("a"), "a");
  assert.equal(test_1("b"), "b");
  assert.equal(test_1("c"), null);
});

test("test_2 returns a constant value", () => {
  assert.deepStrictEqual(test_2(), {
    a: ["x"],
    b: "y",
  });
});

test("test_3 returns (and therefore passes type checking)", () => {
  assert.equal(test_3(u.j), undefined);
});

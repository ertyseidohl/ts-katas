/*
002 - Types

Typescript variables can be annotated with types. The types for the function
test_1 below are incorrect - fix them.

These katas are run in strict mode, which includes noImplicitAny, a setting
which disallows variables without types in places where the Typescript compiler
cannot infer the type. You will need to provide a type for the paramter `x`.
*/

function test_1(x): string {
  return x;
}

test_1(42);

/* DO NOT EDIT BELOW THIS LINE */

import { test } from "node:test";
import { strict as assert } from "node:assert";

test("test_1 returns any number", (t) => {
  assert.equal(typeof test_1(42), "number");
});

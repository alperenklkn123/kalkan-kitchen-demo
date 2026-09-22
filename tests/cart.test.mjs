import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeCart,
  changeQuantity,
  MAX_QUANTITY,
} from "../src/lib/cart.ts";

test("stored data rejects invalid products, malformed rows and fractional counts", () => {
  const result = normalizeCart(
    [
      null,
      { id: "pizza", quantity: 2 },
      { id: "unknown", quantity: 1 },
      { id: "ramen", quantity: -2 },
      { id: "ramen", quantity: 1.5 },
      { id: "pizza", quantity: "3" },
    ],
    ["pizza", "ramen"],
  );
  assert.deepEqual(result, [{ id: "pizza", quantity: 2 }]);
  assert.deepEqual(normalizeCart({ pizza: 1 }, ["pizza"]), []);
});
test("duplicate stored rows merge with the quantity cap", () => {
  assert.deepEqual(
    normalizeCart(
      [
        { id: "pizza", quantity: 15 },
        { id: "pizza", quantity: 15 },
      ],
      ["pizza"],
    ),
    [{ id: "pizza", quantity: MAX_QUANTITY }],
  );
});
test("add, increase, decrease, removal preserve other products and input", () => {
  const initial = [{ id: "pizza", quantity: 1 }];
  const added = changeQuantity(initial, "ramen", 1);
  assert.deepEqual(initial, [{ id: "pizza", quantity: 1 }]);
  assert.deepEqual(changeQuantity(added, "pizza", 1), [
    { id: "pizza", quantity: 2 },
    { id: "ramen", quantity: 1 },
  ]);
  assert.deepEqual(changeQuantity(added, "pizza", -1), [
    { id: "ramen", quantity: 1 },
  ]);
  assert.deepEqual(changeQuantity(added, "unknown", -1), added);
});
test("quantity cannot exceed the cap", () => {
  assert.equal(
    changeQuantity([{ id: "pizza", quantity: MAX_QUANTITY }], "pizza", 1)[0]
      .quantity,
    MAX_QUANTITY,
  );
});

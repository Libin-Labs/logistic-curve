import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('midpoint', () => {
  assert.equal(api.logistic(5, 5, 2), 0.5);
  assert.equal(api.logisticDerivative(5, 5, 2), 0.5);
});
test('known odds', () => {
  assert.ok(Math.abs(api.logistic(Math.log(3)) - 0.75) < 1e-14);
});
test('symmetry', () => {
  for (const x of [-10, -1, 0, 1, 10])
    assert.ok(Math.abs(api.logistic(x) + api.logistic(-x) - 1) < 1e-14);
});
test('negative and zero rates', () => {
  assert.equal(api.logistic(1, 0, 0), 0.5);
  assert.ok(api.logisticDerivative(1, 0, -1) < 0);
});
test('stable tails', () => {
  assert.equal(api.logistic(1000), 1);
  assert.equal(api.logistic(-1000), 0);
  assert.ok(api.logisticDerivative(40) > 0);
});
test('bounds and finite', () => {
  assert.throws(() => api.logistic(Infinity));
  assert.throws(() => api.logistic(1e101));
  assert.throws(() => api.logisticDerivative(0, 0, NaN));
});

import {
  randFloatSpread,
  mapLinear,
  lerp,
  clamp,
  randFloat,
} from '../src/math';

test('randFloatSpread(1) <= 1 return true', () => {
  expect(randFloatSpread(1) <= 1).toBe(true);
});

test('mapLinear(1,2,3,4,5) must return 3', () => {
  expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
});

test('lerp(1,3,20) must return 41', () => {
  expect(lerp(1, 3, 20)).toBe(41);
});

test('randFloat(5, 10) returns a value between 5 and 10', () => {
  const result = randFloat(5, 10);
  expect(result).toBeGreaterThanOrEqual(5);
  expect(result).toBeLessThanOrEqual(10);
});

test('clamp(6,1,5) must return 5', () => {
  expect(clamp(6, 1, 5)).toBe(5);
});

test('clamp(10,2,1) must return 2', () => {
  expect(clamp(10, 2, 1)).toBe(2);
});

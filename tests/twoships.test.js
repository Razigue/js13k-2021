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

test('randFloatSpread(1) >= -1 returns true', () => {
  expect(randFloatSpread(1) >= -1).toBe(true);
});

test('mapLinear(1,2,3,4,5) must return 3', () => {
  expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
});

test('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
  expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
});

test('lerp(1,3,20) must return 41', () => {
  expect(lerp(1, 3, 20)).toBe(41);
});

test('lerp(1.3,-7,2) returns -15.3', () => {
  expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
});

test('randFloat(5, 10) returns a value between 5 and 10', () => {
  const result = randFloat(5, 10);
  expect(result).toBeGreaterThanOrEqual(5);
  expect(result).toBeLessThanOrEqual(10);
});

test('clamp(1, 2, 4) must return 2', () => {
  expect(clamp(1, 2, 4)).toBe(2);
});

test('clamp(10, 1, 5) must return 5', () => {
  expect(clamp(10, 1, 5)).toBe(5);
});

test('clamp(5, 1, 10) must return 5', () => {
  expect(clamp(5, 1, 10)).toBe(5);
});

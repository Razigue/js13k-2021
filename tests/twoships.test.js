import { randFloatSpread, mapLinear, lerp } from '../src/math';

test('randFloatSpread(1) <= 1 return true', () => {
  expect(randFloatSpread(1) <= 1).toBe(true);
});

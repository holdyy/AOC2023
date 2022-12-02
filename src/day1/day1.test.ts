import { day1 } from './day1';
import { data, testData } from './day1.data';

test('Provided test cases', () => {
  expect(day1(testData)).toBe(45000);
});


test('Returns an answer', () => {
  expect(typeof day1(data)).toBe('number');
  expect(day1(data)).toBeGreaterThan(0);
});

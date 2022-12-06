import { logAnswer } from '../utils/logging';
import { day3 } from './day3';
import { data, testData } from './day3.data';

test('Provided test cases', () => {
  expect(day3(testData)).toBe(70);
});

test('Returns an answer', () => {
  logAnswer(day3(data));
  expect(typeof day3(data)).toBe('number');
  expect(day3(data)).toBeGreaterThan(0);
});

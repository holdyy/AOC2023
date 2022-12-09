import { logAnswer } from '../utils/logging';
import { day6 } from './day6';
import { data, testData } from './day6.data';

test('Provided test cases', () => {
  expect(day6(testData)).toBe(26);
});

test('Returns an answer', () => {
  logAnswer(day6(data));
  expect(typeof day6(data)).toBe('number');
  expect(day6(data)).toBeGreaterThan(0);
});

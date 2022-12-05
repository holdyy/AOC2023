import { logAnswer } from '../utils/logging';
import { day2 } from './day2';
import { data, testData } from './day2.data';

test('Provided test cases', () => {
  expect(day2(testData)).toBe(15);
});

test('Returns an answer', () => {
  logAnswer(day2(data));
  expect(typeof day2(data)).toBe('number');
  expect(day2(data)).toBeGreaterThan(0);
});

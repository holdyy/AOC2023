import { logAnswer } from '../utils/logging';
import { day4 } from './day4';
import { data, testData } from './day4.data';

test('Provided test cases', () => {
  expect(day4(testData)).toBe(4);
});

test('Returns an answer', () => {
  logAnswer(day4(data));
  expect(typeof day4(data)).toBe('number');
  expect(day4(data)).toBeGreaterThan(0);
});

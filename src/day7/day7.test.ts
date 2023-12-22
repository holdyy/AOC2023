import { logAnswer } from '../utils/logging';
import { day7 } from './day7';
import { data, testData } from './day7.data';

test('Provided test cases', () => {
  expect(day7(testData)).toBe(6440);
});

test('Returns an answer', () => {
  logAnswer(day7(data));
  expect(typeof day7(data)).toBe('number');
  expect(day7(data)).toBeGreaterThan(0);
});

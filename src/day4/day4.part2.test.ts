import { logAnswer } from '../utils/logging';
import { data, testData } from './day4.data';
import { day4part2 } from './day4.part2';

test('Provided test cases', () => {
  expect(day4part2(testData)).toBe(30);
});

test.only('Returns an answer', () => {
  logAnswer(day4part2(data));
  expect(typeof day4part2(data)).toBe('number');
  expect(day4part2(data)).toBeGreaterThan(0);
});

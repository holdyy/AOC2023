import { logAnswer } from '../utils/logging';
import { data, testData } from './day2.data';
import { day2part2 } from './day2.part2';

test('Provided test cases', () => {
  expect(day2part2(testData)).toBe(2286);
});

test.only('Returns an answer', () => {
  logAnswer(day2part2(data));
  expect(typeof day2part2(data)).toBe('number');
  expect(day2part2(data)).toBeGreaterThan(0);
});

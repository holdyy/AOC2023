import { parseInput } from '../utils/input';

const input = `Time:        47     98     66     98
Distance:   400   1213   1011   1540`;

const testInput = `Time:      7  15   30
Distance:  9  40  200`

const input2 = `Time: 47986698
Distance:  400121310111540`;

const testInput2 = `Time: 71530
Distance: 940200`

export const testData = parseInput(testInput);
export const data = parseInput(input);

export const testData2 = parseInput(testInput);
export const data2 = parseInput(input);

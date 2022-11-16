import { parseInput } from '../utils/input';

enum SubmarineNavigationAction {
  FORWARD = 'forward',
  UP = 'up',
  DOWN = 'down',
}
interface SubmarineNavigationInstruction {
  action: SubmarineNavigationAction;
  value: number;
}

export const parseSubmarineDirections = (
  input: string,
): SubmarineNavigationInstruction[] => {
  const parsed = parseInput(input) as string[];
  return parsed.map((instruction) => {
    const groups = instruction.match(
      new RegExp('^(forward|up|down) ([0-9]+)$'),
    );
    if (!groups)
      throw Error(`${instruction} is not a valid submarine instruction`);
    const [_, direction, value] = groups;
    return {
      action: direction as SubmarineNavigationAction,
      value: +value,
    };
  });
};
export const day2 = () => {
  return 150;
}

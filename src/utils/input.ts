const getDelimiter = (input: string) => {
  if (input.includes('\n')) {
    return '\n';
  }
  if (input.includes(',')) {
    return ',';
  }
  return '';
};

const mapToNumberIfNecessary = (input: string[]) => {
  if (input.every((value) => !isNaN(Number(value)))) {
    return input.map((e) => Number(e));
  }
  return input;
};

export const parseInput = (input: string) => {
  const inputArray = input.split(getDelimiter(input));
  const trimmed = inputArray.map((e) => e.trim());
  return mapToNumberIfNecessary(trimmed);
};

export const parseLines = (input: string, delimiter?: string) => {
  const inputArray = input.split(delimiter || getDelimiter(input));
  return inputArray.map((element) => element.trim());
};

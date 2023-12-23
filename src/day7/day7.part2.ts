export const day7part2 = (data: string) => {
  let parts: string[] = []
  let bid = []
  let hands = []
  let rank = []
  let matches: number[] = []
  let highCard: number[] = []
  let pair: number[] = []
  let twoPair: number[] = []
  let threeofaKind: number[] = []
  let fullHouse: number[] = []
  let fourofaKind: number[] = []
  let fiveofaKind: number[] = []
  let mapofNums: number[][] = []
  let rankings = []


  function findRepeatedNumbers(arr: number[]): number[] {
    const numCount: { [key: number]: number } = {};
    const repeatedNumbers: number[] = [];

    arr.forEach((char) => {
      if (char !== 1) {
        if (numCount[char]) {
          repeatedNumbers.push(char);
        } else {
          numCount[char] = 1;
        }
      }
    });
    return repeatedNumbers;
  }

  function findRepeatedJokers(arr: number[]): number {
    let count = 0

    arr.forEach((digit) => {
      if (digit === 1) {
        count++;
      }
    });
    return count;
  }

  function countUnique(iterable) {
    return new Set(iterable).size;
  }

  function sortArraysByIndex(arrays: number[][]): number[][] {
    const numArrays = arrays.length;
    const arrayLength = arrays[0].length;

    const order = Array.from({ length: arrayLength }, (_, i) => i);

    arrays.sort((a, b) => {
      for (let i = 0; i < arrayLength; i++) {
        const index = order[i];
        if (a[index] !== b[index]) {
          return b[index] - a[index];
        }
      }
      return 0;
    });

    return arrays;
  }

  function combineMultipleArrays(arr1: number[], arr2: number[], arr3: number[], arr4: number[], arr5: number[], arr6: number[], arr7: number[]): number[] {
    return arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7);
  }

  function calculateScore(arr1: number[], arr2: number[]): number {
    let result: number = 0;

    arr1.forEach((element, index) => {
      const multipliedValue = element * arr2[index];
      result += multipliedValue
    });

    return result;
  }

  for (let i = 0; i < data.length; i++) {
    rank.push(data.length - i)
    let nums: number[] = []
    parts = data[i].split(/[" "|]+/)
    hands.push(parts[0])
    bid.push(+parts[1])
    let chars = hands[i].split('');
    for (let j = 0; j < chars.length; j++) {
      if (chars[j] == 'A') { chars[j] = 14 }
      else if (chars[j] == 'K') { chars[j] = 13 }
      else if (chars[j] == 'Q') { chars[j] = 12 }
      else if (chars[j] == 'J') { chars[j] = 1 }
      else if (chars[j] == 'T') { chars[j] = 10 }
      else { chars[j] = +chars[j] }
      nums.push(+chars[j])
    }
    nums.push(bid[i])
    mapofNums.push(nums)
  }

  sortArraysByIndex(mapofNums)

  for (let i = 0; i < data.length; i++) {
    let hand = mapofNums[i].slice(0, 5);
    matches = findRepeatedNumbers(hand)
    let jokers = findRepeatedJokers(hand)

    console.log(mapofNums[i].slice(0, 5))
    console.log(jokers)
    console.log(matches)

    if (countUnique(matches) == 0 && jokers == 0) { highCard.push(mapofNums[i][5]) }
    if (countUnique(matches) == 0 && jokers == 1) { pair.push(mapofNums[i][5]) }
    if (countUnique(matches) == 0 && jokers == 2) { threeofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 0 && jokers == 3) { fourofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 0 && jokers == 4) { fiveofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 0 && jokers == 5) { fiveofaKind.push(mapofNums[i][5]) }

    if (countUnique(matches) == 1 && matches.length == 1 && jokers == 0) { pair.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 1 && jokers == 1) { threeofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 1 && jokers == 2) { fourofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 1 && jokers == 3) { fiveofaKind.push(mapofNums[i][5]) }

    if (countUnique(matches) == 1 && matches.length == 2 && jokers == 0) { threeofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 2 && jokers == 1) { fourofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 2 && jokers == 2) { fiveofaKind.push(mapofNums[i][5]) }

    if (countUnique(matches) == 1 && matches.length == 3 && jokers == 0) { fourofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 3 && jokers == 1) { fiveofaKind.push(mapofNums[i][5]) }

    if (countUnique(matches) == 2 && matches.length == 2 && jokers == 0) { twoPair.push(mapofNums[i][5]) }
    if (countUnique(matches) == 2 && matches.length == 2 && jokers == 1) { fullHouse.push(mapofNums[i][5]) }

    if (countUnique(matches) == 2 && matches.length == 3) { fullHouse.push(mapofNums[i][5]) }

    if (countUnique(matches) == 1 && matches.length == 4) { fiveofaKind.push(mapofNums[i][5]) }

  }

  rankings = combineMultipleArrays(fiveofaKind, fourofaKind, fullHouse, threeofaKind, twoPair, pair, highCard)
  let score = calculateScore(rankings, rank)
  console.log(score)

  return score;
};

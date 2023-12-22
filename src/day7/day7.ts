export const day7 = (data: string) => {
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


  function findRepeatedNumbers(arr): number[] {
    const numCount: { [key: number]: number } = {};
    const repeatedNumbers: number[] = [];

    arr.forEach((char) => {
      if (numCount[char]) {
        repeatedNumbers.push(char);
      } else {
        numCount[char] = 1;
      }
    });
    return repeatedNumbers;
  }

  function countUnique(iterable) {
    return new Set(iterable).size;
  }

  function sortArraysByIndex(arrays: number[][]): number[][] {
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

  function combineMultipleArrays(arr1: number[], arr2: number[], arr3: number[], arr4: number[], arr5: number[], arr6: number[]): number[] {
    return arr1.concat(arr2, arr3, arr4, arr5, arr6);
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
      else if (chars[j] == 'J') { chars[j] = 11 }
      else if (chars[j] == 'T') { chars[j] = 10 }
      else { chars[j] = +chars[j] }
      nums.push(+chars[j])
    }
    nums.push(bid[i])
    mapofNums.push(nums)
  }

  console.log(mapofNums)
  sortArraysByIndex(mapofNums)
  console.log(mapofNums)

  for (let i = 0; i < data.length; i++) {

    matches = findRepeatedNumbers(mapofNums[i])

    if (countUnique(matches) == 0) { highCard.push(i) }
    if (countUnique(matches) == 1 && matches.length == 1) { pair.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 2) { threeofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 3) { fourofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 1 && matches.length == 4) { fiveofaKind.push(mapofNums[i][5]) }
    if (countUnique(matches) == 2 && matches.length == 2) { twoPair.push(mapofNums[i][5]) }
    if (countUnique(matches) == 2 && matches.length == 3) { fullHouse.push(mapofNums[i][5]) }

  }

  console.log(rank)
  rankings = combineMultipleArrays(fullHouse, fourofaKind, threeofaKind, twoPair, pair, highCard)
  console.log(rankings)
  let score = calculateScore(rankings, rank)

  console.log(score)

  return score;
};

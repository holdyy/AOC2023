export const day1 = (data: string) => {
  let numbers = "one, two, three, four, five, six, seven, eight, nine"
  let NumberArray = []
  let Round = []
  let Number = 0
  let score = 0

  for (let i = 0; i < data.length; i++) {
    NumberArray = data[i].match(/\d/g);

    Round = NumberArray[0] + NumberArray[NumberArray.length - 1]
    Number = +Round
    score += Number

    console.log(score)
  }
  return score;
};

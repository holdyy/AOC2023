export const day1 = (data: string) => {
  let NumberArray = []
  let FirstNumber = []
  let LastNumber = []
  let Round = []
  let Number = 0
  let score = 0
  for (let i = 0; i < data.length; i++) {
    NumberArray = data[i].match(/\d+/g);
    console.log(NumberArray)
    FirstNumber = NumberArray[0].split('')
    LastNumber = NumberArray[NumberArray.length - 1].split('')
    //console.log(FirstNumber)
    //console.log(LastNumber)

    Round = FirstNumber[0] + LastNumber[LastNumber.length - 1]
    Number = +Round
    score += Number

    console.log(score)
  }
  return score;
};

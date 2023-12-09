export const day1part2 = (data: string) => {
  let NumberArray = []
  let LastArray = []
  let round = []
  let score = 0
  let number = 0
  let reverseData = []

  function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

  for (let i = 0; i < data.length; i++) {
    reverseData.push(reverseString(data[i]))

  }

  for (let i = 0; i < data.length; i++) {

    NumberArray = data[i].match(/\d|one|two|three|four|five|six|seven|eight|nine/g);

    for (let j = 0; j < NumberArray.length; j++) {
      if (NumberArray[j] == "one") { NumberArray[j] = "1" }
      if (NumberArray[j] == "two") { NumberArray[j] = "2" }
      if (NumberArray[j] == "three") { NumberArray[j] = "3" }
      if (NumberArray[j] == "four") { NumberArray[j] = "4" }
      if (NumberArray[j] == "five") { NumberArray[j] = "5" }
      if (NumberArray[j] == "six") { NumberArray[j] = "6" }
      if (NumberArray[j] == "seven") { NumberArray[j] = "7" }
      if (NumberArray[j] == "eight") { NumberArray[j] = "8" }
      if (NumberArray[j] == "nine") { NumberArray[j] = "9" }
    }

    LastArray = reverseData[i].match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g);

    for (let z = 0; z < LastArray.length; z++) {
      if (LastArray[z] == "eno") { LastArray[z] = "1" }
      if (LastArray[z] == "owt") { LastArray[z] = "2" }
      if (LastArray[z] == "eerht") { LastArray[z] = "3" }
      if (LastArray[z] == "ruof") { LastArray[z] = "4" }
      if (LastArray[z] == "evif") { LastArray[z] = "5" }
      if (LastArray[z] == "xis") { LastArray[z] = "6" }
      if (LastArray[z] == "neves") { LastArray[z] = "7" }
      if (LastArray[z] == "thgie") { LastArray[z] = "8" }
      if (LastArray[z] == "enin") { LastArray[z] = "9" }
    }

    round = NumberArray[0] + LastArray[0]

    number = +round
    score += number

  }
  return score;
};

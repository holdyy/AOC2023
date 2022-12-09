// export const day6 = (data: string) => {
//   let score = 0
//   for (let i = 0; i < data.length - 3; i++) {
//     let str = data[i] + data[i + 1] + data[i + 2] + data[i + 3]

//     //console.log(str)
//     let other = str[1] + str[2] + str[3]
//     let other2 = str[0] + str[2] + str[3]
//     let other3 = str[0] + str[1] + str[3]
//     let other4 = str[0] + str[1] + str[2]

//     if (other.includes(str[0]) === false && other2.includes(str[1]) === false && other3.includes(str[2]) === false && other4.includes(str[3]) === false) { score = i + 4 }
//     if (other.includes(str[0]) === false && other2.includes(str[1]) === false && other3.includes(str[2]) === false && other4.includes(str[3]) === false) { break }

//     // console.log(other.includes(str[0]))
//     // console.log(other2.includes(str[1]))
//     // console.log(other3.includes(str[2]))
//     // console.log(other4.includes(str[3]))
//     // console.log(score)
//   }
//   return score;
// };


export const day6 = (data: string) => {
  let score = 0
  let size = 14
  for (let i = 0; i < data.length - size; i++) {
    let str = data.slice(i, i + size)

    for (let j = 0; j < str.length; j++) {
      let str1 = str.slice(j + 1, size)
      if (str1.includes(str[j])) { break }
      if (j == size - 1) { score = i + size }

    }
    if (score > 0) { break }
  }
  return score;
};

// export const day3 = (data: String) => {
//   let array = []
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let score = 0

//   for (let i = 0; i < data.length; i++) {
//     const line = data[i]
//     let size = line.length / 2
//     let compart1 = line.slice(0, size)
//     let compart2 = line.slice(size)

//     for (let j = 0; j < compart1.length; j++) {
//       let bob = compart1.indexOf(compart2[j]);
//       if (bob !== -1) {
//         let job = compart1[bob]
//         //console.log(job)
//         let number = alphabet.indexOf(job)
//         score += number + 1
//         //console.log(score)
//         break

//       }

//     }
//   }
//   return score;
// };

export const day3 = (data: String) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let score = 0

  for (let i = 0; i < data.length; i += 3) {
    const line1 = data[i]
    const line2 = data[i + 1]
    const line3 = data[i + 2]
    console.log(line1)
    console.log(line2)

    for (let j = 0; j < line2.length; j++) {
      let bob = line1.indexOf(line2[j]);
      if (bob !== -1) {
        let job = line1[bob]
        let nob = line3.indexOf(job);
        if (nob !== -1) {
          let rob = line1[bob]
          console.log(rob)
          let number = alphabet.indexOf(rob)
          score += number + 1
          console.log(score)
          break
        }

      }


    }

  }
  return score;
};

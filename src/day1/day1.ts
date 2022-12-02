export const day1 = (data: number[]) => {
  var array = []
  let rob = 0
  let bob = 0

  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) { rob += data[i] }
    else { { array.push(rob) } { rob = 0 } }

  };

  let sorted = array.sort((a, b) => b - a);

  for (let i = 0; i < 3; i++) {
    console.log(sorted[i]), bob += sorted[i]
  }

  //  const max = array.reduce((a, b) => { return Math.max(a, b) });

  return bob;
};

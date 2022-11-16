export const day1part2 = (data: number[]) => {
  let bob = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i + 3] > data[i]) { bob++ }
  };
  console.log(bob);
  return bob;
};

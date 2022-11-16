export const day1 = (data: number[]) => {
  let rob = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] > data[i - 1]) { rob++ }
  };
  return rob;
};

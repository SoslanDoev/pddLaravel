export const blockSort = (arr, keyName='id') => {
  const n = arr.length;
  if (n === 0) {
    return arr;
  }
  const max = arr.reduce((acc, cur) => Math.max(acc, cur[keyName]), arr[0].data[keyName]);
  const min = arr.reduce((acc, cur) => Math.min(acc, cur[keyName]), arr[0].data[keyName]);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(n);
  for (let i = 0; i < n; i++) {
    count[arr[i].data[keyName] - min]++;
  }
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i].data[keyName] - min] - 1] = arr[i];
    count[arr[i].data[keyName] - min]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
  return arr;
}
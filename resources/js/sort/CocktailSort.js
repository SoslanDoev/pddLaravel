function swap(arr, i, j) {
  var swap = arr[i];    arr[i] = arr[j];
  arr[j] = swap;
}
export const cocktailSort = (arr, keyName = 'id') => {
  var left = 0;
  let firstSwap = 0
  var right  = arr.length - 1;
  let lastSwap = arr.length - 1
  while (left < right) {
    for (var i = left; i < right; i++) {
          if (arr[i][keyName] > arr[i + 1][keyName]) {
              swap(arr, i, i + 1);
              lastSwap = i;
          }
      }
      right = lastSwap;
      for (var j = right; j > left; j--) {
          if (arr[j][keyName] < arr[j - 1][keyName]) {
              swap(arr, j, j - 1);
              firstSwap = j;
          }
      }
      left = firstSwap;
  }
  return arr;
}
// export const cocktailSort = (arr, keyName = 'id') => { // Не работает
//   /*
//     Наименование: Шейкерная сортировка
//     Функция сортирует элементы массива 
//     Входные параметры: 
//       arr - одномерный массив,
//       keyName - Метод сортировки по названию 
//     Выход: отсортированный массив
//   */
//   const start= new Date().getTime()
//   let left = 0, firstSwap = 0
//   let right = arr.length - 1, lastSwap = arr.length - 1
//   while (left < right) {
//     for (let i = left; i < right; i++) {
//       if (arr[i][keyName] > arr[i + 1][keyName]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         lastSwap = i
//       }
//     }
//     right = lastSwap
//     for (let i = right; i > left; i--) {
//       if (arr[i][keyName] < arr[i - 1][keyName]) {
//         [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
//         firstSwap = i
//       }
//     }
//     left = firstSwap
//   }
//   const end = new Date().getTime()
//   localStorage.setItem('speed', `${end-start}ms`)
//   localStorage.setItem('complexity', `O(n^2)`)
//   return arr
// }
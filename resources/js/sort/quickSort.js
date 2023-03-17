export const quickSort = (arr, keyName = 'id') => {
  /*
    Наименование: Сортировка Хора (Быстрая сортировка)
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  const start= new Date().getTime()
  let left = 0;
  let right = arr.length - 1;
  let hasSwapped = false;
  let outerLoopIterationCount = 0;
  while (left < right) {
    outerLoopIterationCount++;
    for (let i = left; i < right; i++) {
      if (arr[i][keyName] > arr[i + 1][keyName]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        hasSwapped = true;
      }
    }
    right--;
    for (let i = right; i > left; i--) {
      if (arr[i][keyName] < arr[i - 1][keyName]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        hasSwapped = true;
      }
    }
    left++;
    if (!hasSwapped) {
      console.log(outerLoopIterationCount)
      return outerLoopIterationCount;
    } else {
      hasSwapped = false;
    }
  }
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity', `O(n^2)`)
  return outerLoopIterationCount;
}
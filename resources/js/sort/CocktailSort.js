export const cocktailSort = (arr, keyName = 'id') => {
  /*
    Наименование: Шейкерная сортировка
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - Одномерный массив,
      keyName - Метод сортировки по названию
    Выход: Остортированный массив
  */
  let
    left = 0,
    right = arr.length - 1,
    swapped
  do {
    swapped = false;
    for (let i = left; i < right; i++) {
      if (keyName == 'score') {
        if (arr[i].score < arr[i+1].score) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      } 
      else if (arr[i].data[keyName] > arr[i + 1].data[keyName]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
    swapped = false;
    right--;
    for (let i = right; i > left; i--) {
      if (keyName == 'score') {
        if (arr[i].score > arr[i-1].score) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          swapped = true;
        }
      }
      else if (arr[i].data[keyName] < arr[i - 1].data[keyName]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapped = true;
      }
    }
    left++;
  } while (swapped);
  return arr;
}
export const insertionSort = (arr, keyName) => {
  /*
    Наименование: Сортировка вставками
    Функция сортирует массив методом вставками 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    if (keyName == 'score') {
      while (j >= 0 && arr[j].score < current.score) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    else {
      while (j >= 0 && arr[j].data[keyName] > current.data[keyName]) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    arr[j + 1] = current;
  }
  return arr;
}
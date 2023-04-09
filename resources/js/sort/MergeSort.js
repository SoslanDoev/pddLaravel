export const mergeSort = (arr, keyName = 'id') => {
  /*
    Наименование: Сортировка слиянием 
    Функция сортирует массив
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  const n = arr.length;
  const tempArray = new Array(n);
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      const leftEnd = Math.min(leftStart + size, n);
      const rightStart = leftEnd;
      const rightEnd = Math.min(rightStart + size, n);
      let i = leftStart;
      let j = rightStart;
      for (let k = leftStart; k < rightEnd; k++) {
        if (keyName == 'score') {
          if (i < leftEnd && (j >= rightEnd || arr[i].score >= arr[j].score)) {
            tempArray[k] = arr[i];
            i++;
          } else {
            tempArray[k] = arr[j];
            j++;
          }
        } else if (Number.isInteger(keyName)) {
          if (i < leftEnd && (j >= rightEnd || arr[i].data.results[keyName].grade >= arr[j].data.results[keyName].grade)) {
            tempArray[k] = arr[i];
            i++;
          } else {
            tempArray[k] = arr[j];
            j++;
          }
        }
        else {
          if (i < leftEnd && (j >= rightEnd || arr[i].data[keyName] <= arr[j].data[keyName])) {
            tempArray[k] = arr[i];
            i++;
          } else {
            tempArray[k] = arr[j];
            j++;
          }
        }
      }
      for (let k = leftStart; k < rightEnd; k++) {
        arr[k] = tempArray[k];
      }
    }
  }
  return arr;
}
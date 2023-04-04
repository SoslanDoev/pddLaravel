export const gnomeSort = (arr, keyName = 'id') => {
  /*
    Наименование : Гномья сортировка 
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  let i = 1
  let j = 2
  while (i < arr.length) {
    if (keyName == 'score') {
      if (arr[i - 1].score >= arr[i].score) {
        i = j
        j++
      } else {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        i--
        if (i === 0) {
          i = j
          j++
        }
      }
    } else {
      if (arr[i - 1].data[keyName] <= arr[i].data[keyName]) {
        i = j
        j++
      } else {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        i--
        if (i === 0) {
          i = j
          j++
        }
      }
    }
  }
  return arr;
}
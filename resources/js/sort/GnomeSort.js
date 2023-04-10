export const gnomeSort = (arr, keyName = 'id') => {
  const start= new Date().getTime()
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
    } else if (Number.isInteger(keyName)) { 
      if (arr[i - 1].data.results[keyName].grade >= arr[i].data.results[keyName].grade) {
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
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n^2)`)
  localStorage.setItem('complexity_3', `O(1)`)
  return arr;
}
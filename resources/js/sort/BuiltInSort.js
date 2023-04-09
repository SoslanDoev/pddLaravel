export const sortBuiltIn = (arr, keyName = 'id') => {
  /*
    Наименование: Встроенная функция sort
    Функция сортирует элементы массива
    Входные параметры:
      arr - Одномерный массив,
      keyName - Метод сортировки по названию
    Выход: Отсортированный массив
  */
  // const start= new Date().getTime()
  if (keyName === 'score') {
    arr = arr.sort((a, b) => b.score - a.score) 
  }
  else if (Number.isInteger(keyName)) {
    arr = arr.sort((a, b) => b.data.results[keyName].grade - a.data.results[keyName].grade)
  } else {
    arr = arr.sort((a, b) => a.data[keyName] > b.data[keyName]) 
  }
  return arr 
  // let res = (keyName == 'score')
    // ? arr.sort((a, b) => b.score - a.score)
    // : arr.sort((a, b) => a.data[keyName] > b.data[keyName])
  // const end = new Date().getTime()
  // localStorage.setItem('speed', `${end-start}ms`)
  // localStorage.setItem('complexity', `O(n^2)`)
  // return res
}
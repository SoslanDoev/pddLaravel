export const sortBuiltIn = (arr, keyName = 'id') => {
  /*
    Наименование: Встроенная функция sort
    Функция сортирует элементы массива
    Входные параметры:
      arr - Одномерный массив,
      keyName - Метод сортировки по названию
    Выход: Отсортированный массив
  */
  const start= new Date().getTime()
  let res = (keyName == 'score')
  ? arr.sort((a, b) => b[keyName] - a[keyName])
  : arr.sort((a, b) => a[keyName] > b[keyName])
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity', `O(n^2)`)
  return res
}
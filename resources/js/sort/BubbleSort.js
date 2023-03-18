export const bubbleSort = (arr, keyName = 'id') => { // Работает
  /*
    Наименование : Сортировка пузырьком
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  const start= new Date().getTime()
  if (arr.length < 2 || !arr) {return}
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j][keyName] < arr[j + 1][keyName] && keyName == 'score') {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        wasSwap = true
      }
      else if (arr[j][keyName] > arr[j + 1][keyName]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        wasSwap = true
      }
    }
    if (!wasSwap) break
  }
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity', `O(n^2)`)
  return arr
}
export const bubbleSort = (arr, keyName = 'id') => { // Работает
  const start= new Date().getTime()
  /*
    Наименование : Сортировка пузырьком
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  if (arr.length < 2 || !arr) {return}
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false
    if (keyName == 'score') {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j].score < arr[j + 1].score && keyName == 'score') {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          wasSwap = true
        }
      }
    } else if (Number.isInteger(keyName)) {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j].data.results[keyName].grade < arr[j + 1].data.results[keyName].grade) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          wasSwap = true
        }
      }
    } else {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j].data[keyName] > arr[j + 1].data[keyName]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          wasSwap = true
        }
      }
    }
    if (!wasSwap) break
  }
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n^2)`)
  localStorage.setItem('complexity_3', `O(1)`)
  return arr
}
export function smoothSort(arr, keyName) {
  const start= new Date().getTime()
  /*
    Наименование: Плавная сортировка
    Функция сортирует массив методом плавной сортировки 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  const n = arr.length
  let gap = n
  let swaps = true
  while (gap > 1 || swaps) {
    gap = Math.floor(gap / 1.3)
    if (gap < 1) gap = 1
    let i = 0
    swaps = false
    while (i + gap < n) {
      if (compare(arr[i], arr[i + gap], keyName) > 0) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]
        swaps = true
      }
      i++
    }
  }
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n\log n)`)
  localStorage.setItem('complexity_2', `O(n\log n)`)
  localStorage.setItem('complexity_3', `O(n)`)
  return arr
}

function compare(a, b, keyName) {
  if (keyName == 'score') {
    if (a.score < b.score) return 1
    if (a.score > b.score) return -1
    return 0
  } else if (Number.isInteger(keyName)) {
    if (a.data.results[keyName].grade < b.data.results[keyName].grade) return 1
    if (a.data.results[keyName].grade > b.data.results[keyName].grade) return -1
    return 0
  } else {
    if (a.data[keyName] < b.data[keyName]) return -1
    if (a.data[keyName] > b.data[keyName]) return 1
    else return 0
  }
}
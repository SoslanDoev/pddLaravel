const defaultCompare = (c, a, b) => { 
  /*
    Вспомогательная функция для сортировки выбором
    Входные параметры: 
      c - Имя ключа объекта (по которому идет сортировка),
      a - Массив i
      b - Массив j
    Выход: -1, 1
  */
  if (c =='score') {
    if (a.score > b.score) return -1
    else return 1
  }
  if (Number.isInteger(c)) {
    if (a.data.results[c].grade > b.data.results[c].grade) return -1
    else return 1
  }
  if (a.data[c] === b.data[c]) return 0
  return a.data[c] < b.data[c] ? -1 : 1
}

export const selectionSort = (arr, keyName, compare = defaultCompare) => {
  /*
    Наименование: Сортировка выбором
    Функция сортирует массив методом выбора 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
    Статус: Работает (надо поменять if)
  */
  const start= new Date().getTime()
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (compare(keyName, arr[minIndex], arr[j]) === 1) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity', `O(n^2)`)
  return arr;
}
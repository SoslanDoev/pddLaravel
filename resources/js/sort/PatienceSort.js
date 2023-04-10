export const patienceSort = (arr, keyName='id') => {
  const start= new Date().getTime()
  /*
    Наименование: Терпеливая сортировка
    Функция сортирует массив методом терпеливой сортировки 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  // Создаем пустой стек
  const stacks = [[]]
  // Проходим по всем студентам
  for (const elem of arr) {
    let inserted = false
    // Проходим по всем стекам
    for (let i = 0; i < stacks.length; i++) {
      // Если текущий стек пуст или последний элемент стека меньше текущего студента, 
      // добавляем его в стек и помечаем, что он был вставлен
      if (keyName == 'score') {
        if (stacks[i].length === 0 || stacks[i][stacks[i].length - 1].score > elem.score) {
          stacks[i].push(elem)
          inserted = true
          break
        }
      } else {
        if (stacks[i].length === 0 || stacks[i][stacks[i].length - 1].data[keyName] < elem.data[keyName]) {
          stacks[i].push(elem)
          inserted = true
          break
        }
      }
    }
    // Если студент не был вставлен в существующие стеки, создаем новый стек
    if (!inserted) {
      stacks.push([elem])
    }
  }
  // Сливаем стеки пока не останется только один
  while (stacks.length > 1) {
    const firstStack = stacks.shift()
    const secondStack = stacks.shift()
    const mergedStack = []
    let i = 0
    let j = 0
    if (keyName == 'score') {
      while (i < firstStack.length && j < secondStack.length) {
        if (firstStack[i].score > secondStack[j].score) {
          mergedStack.push(firstStack[i])
          i++
        } else {
          mergedStack.push(secondStack[j])
          j++
        }
      }
    } else if (Number.isInteger(keyName)) {
      while (i < firstStack.length && j < secondStack.length) {
        if (firstStack[i].data.results[keyName].grade > secondStack[j].data.results[keyName].grade) {
          mergedStack.push(firstStack[i])
          i++
        } else {
          mergedStack.push(secondStack[j])
          j++
        }
      }
    } else {
      // Слияние двух стеков
      while (i < firstStack.length && j < secondStack.length) {
        if (firstStack[i].data[keyName] < secondStack[j].data[keyName]) {
          mergedStack.push(firstStack[i])
          i++
        } else {
          mergedStack.push(secondStack[j])
          j++
        }
      }
    }
    // Добавление оставшихся элементов первого стека
    while (i < firstStack.length) {
      mergedStack.push(firstStack[i])
      i++
    }
    // Добавление оставшихся элементов второго стека
    while (j < secondStack.length) {
      mergedStack.push(secondStack[j])
      j++
    }
    // Добавление объединенного стека в начало списка стеков
    stacks.unshift(mergedStack)
  }
  // Возвращаем отсортированный массив студентов
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n log n)`)
  localStorage.setItem('complexity_3', `O(n)`)
  return stacks[0]
}
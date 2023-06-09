export const quickSort = (array, keyName = 'id') => {
  const start= new Date().getTime()
  // Создаем стек и добавляем начальный диапазон
  const stack = [[0, array.length - 1]];
  // Пока стек не пуст
  while (stack.length) {
    // Извлекаем диапазон из стека
    const [startIndex, endIndex] = stack.pop();
    // Если диапазон пуст, переходим к следующему
    if (endIndex <= startIndex) {
      continue;
    }
    // Выбираем опорный элемент
    const pivotIndex = Math.floor((startIndex + endIndex) / 2);
    const pivotValue = array[pivotIndex];
    // Разделяем элементы на две группы вокруг опорного элемента
    let leftIndex = startIndex;
    let rightIndex = endIndex;
    while (leftIndex <= rightIndex) {
      if (keyName == 'score') {
        while (array[leftIndex].score > pivotValue.score) {
          leftIndex++;
        }
        while (array[rightIndex].score < pivotValue.score) {
          rightIndex--;
        }
      } else if (Number.isInteger(keyName)) {
        while (array[leftIndex].data.results[keyName].grade > pivotValue.data.results[keyName].grade) {
          leftIndex++;
        }
        while (array[rightIndex].data.results[keyName].grade < pivotValue.data.results[keyName].grade) {
          rightIndex--;
        }
      } else {
        while (array[leftIndex].data[keyName] < pivotValue.data[keyName]) {
          leftIndex++;
        }
        while (array[rightIndex].data[keyName] > pivotValue.data[keyName]) {
          rightIndex--;
        }
      }
      if (leftIndex <= rightIndex) {
        [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
        leftIndex++;
        rightIndex--;
      }
    }
    // Добавляем в стек диапазоны для следующей итерации
    stack.push([startIndex, rightIndex]);
    stack.push([leftIndex, endIndex]);
  }
  // Возвращаем отсортированный массив
  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n\log n)`)
  localStorage.setItem('complexity_3', `O(1)`)
  return array;
}
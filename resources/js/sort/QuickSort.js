export const quickSort = (array, keyName = 'id') => {
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
      }
      else {
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
  return array;
}
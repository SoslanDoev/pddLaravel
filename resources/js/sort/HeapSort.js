export const heapSort = (arr, keyName = 'id') => {
  /*
    Наименование : Сортировка кучей
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  // Строим двоичную кучу
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
  // Извлекаем элементы по одному и перестраиваем кучу
  for (let i = arr.length - 1; i > 0; i--) {
    // Перемещаем текущий корень в конец массива
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Перестраиваем кучу без последнего элемента
    heapify(arr, i, 0, keyName);
  }
  return arr;
}

const heapify = (arr, n, i, keyName) => { // Вспомогательная функция 
  let largest = i;  // Инициализируем наибольший элемент как корень
  const left = 2 * i + 1;  // Левый потомок
  const right = 2 * i + 2;  // Правый потомок
  if (keyName == 'score') {
    // Если левый потомок больше родительского элемента
    if (left < n && arr[left].score < arr[largest].score) largest = left;
    // Если правый потомок больше наибольшего элемента
    if (right < n && arr[right].score < arr[largest].score) largest = right;
  } else {
    // Если левый потомок больше родительского элемента
    if (left < n && arr[left][keyName] > arr[largest][keyName]) largest = left;
    // Если правый потомок больше наибольшего элемента
    if (right < n && arr[right][keyName] > arr[largest][keyName]) largest = right;
  }
  // Если наибольший элемент не корень
  if (largest !== i) {
    // Обменять корень с наибольшим элементом
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Перестроить кучу с наибольшим элементом в качестве корня
    heapify(arr, n, largest, keyName);
  }
}
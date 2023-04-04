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
  const n = arr.length;
  // Построение кучи (перегруппируем массив)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i, keyName);
  // Один за другим извлекаем элементы из кучи
  for (let i = n - 1; i > 0; i--) {
    // Перемещаем текущий корень в конец
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    // вызываем процедуру heapify на уменьшенной куче
    heapify(arr, i, 0, keyName);
  }
  return arr;
}

function heapify(arr, n, i, keyName) {
  let largest = i; // Инициализируем наибольший элемент как корень
  const l = 2 * i + 1; // левый = 2*i + 1
  const r = 2 * i + 2; // правый = 2*i + 2
  // Если левый дочерний элемент больше корня
  if (keyName == 'score') {
    if (l < n && arr[l].score < arr[largest].score) largest = l;
    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (r < n && arr[r].score < arr[largest].score) largest = r;
    // Если самый большой элемент не корень
  } else {
    if (l < n && arr[l].data[keyName] > arr[largest].data[keyName]) largest = l;
    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (r < n && arr[r].data[keyName] > arr[largest].data[keyName]) largest = r;
    // Если самый большой элемент не корень
  }
  if (largest !== i) {
    const swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    // Рекурсивно сверху вниз вызываем процедуру heapify
    heapify(arr, n, largest, keyName);
  }
}
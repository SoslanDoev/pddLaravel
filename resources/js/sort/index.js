import { sortBuiltIn } from "./BuiltInSort"
import { bubbleSort } from "./BubbleSort"
import { cocktailSort } from "./CocktailSort"
import { selectionSort } from "./SelectionSort"
import { quickSort } from "./QuickSort"
import { insertionSort } from './InsertSort' 
import { heapSort } from './HeapSort'

// Сортировка слиянием
const merge = (arrFirst, arrSecond, keyName = 'score') => {
  let
    arrSort = [],
    i = 0,
    j = 0
  console.log('da', keyName)
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(
      (arrFirst[i].keyName > arrSecond[j].keyName) ? arrFirst[i++] : arrSecond[j++]
    )
  }    // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [
     ...arrSort,
     ...arrFirst.slice(i),
     ...arrSecond.slice(j),
  ]
}

const mergeSort = (arr, keyName) => {    // Проверяем корректность переданных данных
  /*
    Функция сортирует массив методом слияния 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.length <= 1) { //Если массив содержит один элемент просто возвращаем его
    return arr
  }
  const middle = Math.floor(arr.length / 2) // Находим середину массива и делим его на два
  const arrLeft = arr.slice(0, middle)
  const arrRight = arr.slice(middle)    // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight), keyName)
}
// Сортировка слиянием

export default {
  sortBuiltIn, // Встроенная сортировка
  bubbleSort, // Пузырьковая сортировка 
  cocktailSort, // Шейкерная сортировка
  mergeSort, // Сортировка слиянием
  // sortBuckets, // Блочная сортировка
  selectionSort, // Сортировка выбором 
  quickSort, // Быстрая сортировка (Хоара)
  insertionSort, // Сортировка вставками
  heapSort, // Сортировка кучей
}
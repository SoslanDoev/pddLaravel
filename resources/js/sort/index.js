import { sortBuiltIn } from "./BuiltInSort"
import { bubbleSort } from "./BubbleSort"
import { cocktailSort } from "./CocktailSort"
import { selectionSort } from "./SelectionSort"
import { quickSort } from "./QuickSort"
import { insertionSort } from './InsertSort' 
import { heapSort } from './HeapSort'
import { smoothSort } from './SmoothSort'
import { patienceSort } from './PatienceSort'
import { bogoSort } from './BogoSort'
import { gnomeSort } from './GnomeSort'
import { mergeSort } from './MergeSort'

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
  smoothSort, // Плавная сортировка
  patienceSort, // Терпеливая сортировка 
  bogoSort, // Рандномная сортировка
  gnomeSort, // Гномья сортировка 
}
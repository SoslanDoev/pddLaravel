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
import { binaryTreeSort } from './BinaryTreeSort'
import { combSort } from './CombSort'
import { blockSort } from './BlockSort'

export default {
  sortBuiltIn, // Встроенная сортировка
  bubbleSort, // Пузырьковая сортировка 
  cocktailSort, // Шейкерная сортировка
  mergeSort, // Сортировка слиянием
  // sortBuckets, // Блочная сортировка
  selectionSort, // Сортировка выбором 
  quickSort, // Быстрая сортировка (Хоара)
  insertionSort, // Сортировка вставками
  heapSort, // Сортировка кучей (Пирамидальная)
  smoothSort, // Плавная сортировка
  patienceSort, // Терпеливая сортировка 
  bogoSort, // Рандномная сортировка
  gnomeSort, // Гномья сортировка 
  binaryTreeSort, // Сортировка с помощью двоичного дерева
  combSort, // Сортировка расческой 
  blockSort, // Блочная сортировка  
}
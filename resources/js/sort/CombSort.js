export const combSort = (arr, keyName = 'id') => {
  const start= new Date().getTime()
  /*
    Наименование: Сортировка расческой
    Функция сортирует массив 
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  const len = arr.length;
  let gap = len;
  let swapped = true;
  while (gap > 1 || swapped) {
    gap = Math.floor(gap / 1.3);
    if (gap < 1) {
      gap = 1;
    }
    let i = 0;
    swapped = false;
    if (keyName == 'score') {
      while (i + gap < len) {
        if (arr[i].score < arr[i + gap].score) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          swapped = true;
        }
        i++;
      }
    } else if (Number.isInteger(keyName)) { 
      while (i + gap < len) {
        if (arr[i].data.results[keyName].grade < arr[i + gap].data.results[keyName].grade) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          swapped = true;
        }
        i++;
      }
    } else {
      while (i + gap < len) {
        if (arr[i].data[keyName] > arr[i + gap].data[keyName]) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          swapped = true;
        }
        i++;
      }
    }
  }

  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n^2/2^p)`)
  localStorage.setItem('complexity_3', `O(1)`)
  return arr;
}
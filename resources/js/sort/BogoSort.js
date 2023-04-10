export const bogoSort = (arr, keyName = 'id') => {
  const start= new Date().getTime()
  /*
    Наименование : Рандомная сортировка 
    Функция сортирует элементы массива 
    Входные параметры: 
      arr - одномерный массив,
      keyName - Метод сортировки по названию 
    Выход: отсортированный массив
  */
  const keyN = keyName
  var isSorted = function(arr){
    for(var i = 1; i < arr.length; i++){
      if (keyN == 'score') {
        if (arr[i-1].score < arr[i].score) {
          return false
        }
      } else if (Number.isInteger(keyN)) {
        if (arr[i-1].data.results[keyN].grade < arr[i].data.results[keyN].grade) {
          return false
        }
      } else {
        if (arr[i-1].data[keyN] > arr[i].data[keyN]) {
          return false;
        }
      }
    }
    return true;
  };

  function shuffle(arr){
      var count = arr.length, temp, index;

      while(count > 0){
          index = Math.floor(Math.random() * count);
          count--;

          temp = arr[count];
          arr[count] = arr[index];
          arr[index] = temp;
      }

      return arr;
  }

 function sort(arr){
      var sorted = false;
      while(!sorted){
          arr = shuffle(arr);
          sorted = isSorted(arr);
      }
      return arr;
  }

  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `Неограниченно`)
  localStorage.setItem('complexity_2', `O(n!)`)
  localStorage.setItem('complexity_3', `O(1)`)
  return sort(arr);
}
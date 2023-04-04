export const bogoSort = (arr, keyName = 'id') => {
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

  return sort(arr);
}
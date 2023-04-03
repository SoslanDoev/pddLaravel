export const patienceSort = (students, keyName='id') => {
  // Создаем пустой стек
  const stacks = [[]];
  
  // Проходим по всем студентам
  for (const student of students) {
    let inserted = false;
    
    // Проходим по всем стекам
    for (let i = 0; i < stacks.length; i++) {
      // Если текущий стек пуст или последний элемент стека меньше текущего студента, 
      // добавляем его в стек и помечаем, что он был вставлен
      if (keyName == 'score') {
        if (stacks[i].length === 0 || stacks[i][stacks[i].length - 1].score > student.score) {
          stacks[i].push(student);
          inserted = true;
          break;
        }
      } else {
        if (stacks[i].length === 0 || stacks[i][stacks[i].length - 1].data[keyName] < student.data[keyName]) {
          stacks[i].push(student);
          inserted = true;
          break;
        }
      }
    }
    
    // Если студент не был вставлен в существующие стеки, создаем новый стек
    if (!inserted) {
      stacks.push([student]);
    }
  }
  
  // Сливаем стеки пока не останется только один
  while (stacks.length > 1) {
    const firstStack = stacks.shift();
    const secondStack = stacks.shift();
    
    const mergedStack = [];
    let i = 0;
    let j = 0;
    if (keyName == 'score') {
      while (i < firstStack.length && j < secondStack.length) {
        if (firstStack[i].score > secondStack[j].score) {
          mergedStack.push(firstStack[i]);
          i++;
        } else {
          mergedStack.push(secondStack[j]);
          j++;
        }
      }
    } else {
      // Слияние двух стеков
      while (i < firstStack.length && j < secondStack.length) {
        if (firstStack[i].data[keyName] < secondStack[j].data[keyName]) {
          mergedStack.push(firstStack[i]);
          i++;
        } else {
          mergedStack.push(secondStack[j]);
          j++;
        }
      }
    }
    
    // Добавление оставшихся элементов первого стека
    while (i < firstStack.length) {
      mergedStack.push(firstStack[i]);
      i++;
    }
    
    // Добавление оставшихся элементов второго стека
    while (j < secondStack.length) {
      mergedStack.push(secondStack[j]);
      j++;
    }
    
    // Добавление объединенного стека в начало списка стеков
    stacks.unshift(mergedStack);
  }
  
  // Возвращаем отсортированный массив студентов
  console.log(stacks[0])
  return stacks[0];
}
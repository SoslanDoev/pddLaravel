class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let start = null
export const binaryTreeSort = (arr, keyName = 'id') => {
  start = new Date().getTime()
  /*
    Наименование: Сортировка c помощью двоичного дерева 
    Функция сортирует массив
    Входные параметры: 
      arr - одномерный массив
      keyName - ключ по которому сортируем
    Выход: Отсортированный массив
  */
  const root = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    addNode(root, new Node(arr[i]), keyName);
  }

  return traverseInOrder(root);
}

function addNode(node, newNode, keyName) {
  if (keyName == 'score') {
    if (newNode.value.score > node.value.score) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        addNode(node.left, newNode, keyName);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        addNode(node.right, newNode, keyName);
      }
    }
  } else if (Number.isInteger(keyName)) {
    if (newNode.value.data.results[keyName].grade > node.value.data.results[keyName].grade) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        addNode(node.left, newNode, keyName);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        addNode(node.right, newNode, keyName);
      }
    }
  } else {
    if (newNode.value.data[keyName] < node.value.data[keyName]) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        addNode(node.left, newNode, keyName);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        addNode(node.right, newNode, keyName);
      }
    }
  }
}

function traverseInOrder(node, result = []) {
  if (node !== null) {
    traverseInOrder(node.left, result);
    result.push(node.value);
    traverseInOrder(node.right, result);
  }

  const end = new Date().getTime()
  localStorage.setItem('speed', `${end-start}ms`)
  localStorage.setItem('complexity_1', `O(n^2)`)
  localStorage.setItem('complexity_2', `O(n\log n)`)
  localStorage.setItem('complexity_3', `O(n)`)
  return result;
}
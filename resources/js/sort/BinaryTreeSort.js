class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const binaryTreeSort = (arr, keyName = 'id') => {
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

  return result;
}
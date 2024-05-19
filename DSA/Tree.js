class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    // Insert a new node into the tree
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper function to insert recursively
    insertNode(currentNode, newNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this.insertNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this.insertNode(currentNode.right, newNode);
        }
      }
    }
  
    // Pre-order traversal (visit root, then left subtree, then right subtree)
    preOrderTraversal(node = this.root) {
      if (node !== null) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // In-order traversal (visit left subtree, then root, then right subtree)
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  
    // Post-order traversal (visit left subtree, then right subtree, then root)
    postOrderTraversal(node = this.root) {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Usage example
  const myTree = new Tree();
  myTree.insert(50);
  myTree.insert(30);
  myTree.insert(20);
  myTree.insert(40);
  myTree.insert(70);
  myTree.insert(60);
  myTree.insert(80);
  console.log("Pre-order traversal:");
  myTree.preOrderTraversal(); // Output: 50 30 20 40 70 60 80
  console.log("In-order traversal:");
  myTree.inOrderTraversal(); // Output: 20 30 40 50 60 70 80
  console.log("Post-order traversal:");
  myTree.postOrderTraversal(); // Output: 20 40 30 60 80 70 50
  
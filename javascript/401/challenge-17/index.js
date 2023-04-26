'use strict';

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(){
    let result = [];
    let traverse = (node) =>{
      result.push(node.data);
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder(){
    let result = [];
    let traverse = (node) =>{
      if(node.left){
        traverse(node.left);
      }
      result.push(node.data);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder(){
    let result = [];
    let traverse = (node) =>{
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {

  add(val){
    let node = new Node(val);
    let curr = this.root;
    if(!curr){ //if no root node
      this.root = node;
    }
    else{ //root node exists
      while(curr){
        if(val > curr.data){
          if(curr.right){
            curr = curr.right;
          }else{
            curr.right = node;
            break;
          }
        }
        else{
          if(curr.left){
            curr = curr.left;
          }else{
            curr.left = node;
            break;
          }
        }
      }
    }
  }

  contains(val){
    let curr = this.root;
    if(!curr){ //if no root node
      return false;
    }
    else{ //root node exists
      while(curr){
        if(val > curr.data){
          if(curr.right){
            curr = curr.right;
          }
          else{return false;}
        }
        else if(val<curr.data){
          if(curr.left){
            curr = curr.left;
          }else{return false;}
        }
        else{return true;}
      }
    }
  }
}

function breadthFirst(tree){
  let arrQueue = [];
  let returnArr = [];
  arrQueue.push(tree.root);

  while(arrQueue[0]){
    let current = arrQueue.shift();
    returnArr.push(current.data);
    if(current.left){
      arrQueue.push(current.left);
    }
    if(current.right){
      arrQueue.push(current.right);
    }
    console.log(returnArr);
  }

  return returnArr;

}

module.exports = {BinaryTree, BinarySearchTree, Node, breadthFirst};

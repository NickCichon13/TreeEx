/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const total = this.root.val;

    function sumValue(node) {
      for (let child of node.children) {
        total += child.val;

          if(child.children.length > 0){
            sumValue(child);
          }
      }
    }
    sumValue(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let value = this.root.val % 2 === 0
      
    function evenValue (node) {
      for ( let child of node.children ) {
        if(child.val % 2 === 0){
          value++;

          if(child.children.length > 0 ){
            evenValue(child);
          }
        }
      }
    }
    evenValue(this.root);
    return value;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countGreater(node) {
      for (let child of node.children) {
        if(child.val > lowerBound) {
          count ++;

          if(child.children.length > 0){
            countGreater(child);
          }
        }
      }
    }
    countGreater(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const numbers: number[] = [];
  preorder(root);
  function preorder(root): TreeNode | null {
    if (!root) {
      return null;
    }
    numbers.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  return numbers;
}

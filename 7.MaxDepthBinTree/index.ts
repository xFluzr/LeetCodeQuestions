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

function maxDepth(root: TreeNode | null): number {
    if(root===null){
        return 0;
    }
    let leftDepth=maxDepth(root.left);
    let rightDepth =maxDepth(root.right);
    return 1+Math.max(leftDepth,rightDepth);
}

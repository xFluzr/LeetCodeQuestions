var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function maxDepth(root) {
    var length = 0;
    if (root === null) {
        return 0;
    }
    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}

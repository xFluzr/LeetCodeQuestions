var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function preorderTraversal(root) {
    var numbers = [];
    preorder(root);
    function preorder(root) {
        if (!root) {
            return null;
        }
        numbers.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    return numbers;
}

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
const isSymmetric = (root) => {
    if (!root) return true
    return recursive(root.left, root.right)
}

const recursive = (leftTree, rightTree) => {
    if (!leftTree && !rightTree) return true
    if (!leftTree || !rightTree || (leftTree.val !== rightTree.val)) return false
    if (leftTree.val === rightTree.val) {
        return recursive(leftTree.left, rightTree.right) && recursive(leftTree.right, rightTree.left)
    }
}

// var isSymmetric = function(root) {
//     const recursive = (root, output = []) => {
//         if (!root) output.push(null)
//         if (root) {
//             recursive(root.left, output)
//             output.push(root.val)
//             recursive(root.right, output)
//         }

//         return output
//     }

//     let output = recursive(root)
//     let left = 0, right = output.length - 1
//     while (left < right) {
//         if (output[left] !== output[right]) return false
//         left ++
//         right --
//     }

//     // [null, 2, null, 2, null, 1, null, 2, null, 2, null]
//     // [null, 3, null, 2, null, 4, null, 1, null, 4, null, 2,    null, 3,    null]
//     return true
// };
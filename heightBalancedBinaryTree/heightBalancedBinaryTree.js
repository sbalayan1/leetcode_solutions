//brute force solution
//calculate the height of the binary tree at each node. Note the height of a binary tree is the largest number of edges in a path from leaf to target node. 

//The below calculates the height of a binary tree at any given node
function calculateHeight(root) {
    let max = 0
    const recursive = (root, count = 0) => {
        if (root) {
            if (!root.left && !root.right) {
                max = Math.max(max, count)
                return
            }
            count += 1
            recursive(root.left, count)
            recursive(root.right, count)
        }
    }

    recursive(root)
    return max
}

//Cleaner way to calculate height of a tree from a given node
function clearnerCalculateHeight(root) {
    if (!root) return -1
    const left = cleanerCalculateHeight(root.left)
    const right = cleanerCalculateHeight(root.right)
    return Math.max(left, right) + 1
}

function isBalanced(root) {
    //traverse the tree in any order. At each node. calculate the height and compare the left and right tree
    const preorderTraversal = (root) => {
        if (root) {
            let leftHeight = 0, rightHeight = 0
            if ((!root.right || !root.left) && calculateHeight(root) > 1) return false
            if (root.left) leftHeight = calculateHeight(root.left)
            if (root.right) rightHeight = calculateHeight(root.right)
            if (Math.abs(leftHeight-rightHeight) > 1) return false
            return preorderTraversal(root.left) && preorderTraversal(root.right)
        }

        return true
    }

    preorderTraversal(root)
    return true
}

function cleanerIsBalanced(root) {
    if (!root) return true
    return Math.abs(cleanerCalculateHeight(root.left) - cleanerCalculateHeight(root.right)) < 2 && cleanerIsBalanced(root.left) && cleanerIsBalanced(root.right)
}

// timeComplexity: O(n^2)
// spaceComplexity: O(h) => inefficient

function isBalancedHelper(root) {
    if (!root) return [-1, true]
    let [leftHeight, leftIsBalanced] = isBalancedHelper(root.left)
    let [rightHeight, rightIsBalanced] = isBalancedHelper(root.right)
    if (!leftIsBalanced || !rightIsBalanced) return [0, false]
    // let [rightHeight, rightIsBalanced] = isBalancedHelper(root.right)

    return [Math.max(leftHeight, rightHeight) + 1, Math.abs(leftHeight - rightHeight) < 2] 
}

function isBalanced(root) {
    return isBalancedHelper(root)[1]
}

// Complexity Analysis

// Time complexity : O(n)\mathcal{O}(n)O(n)

// For every subtree, we compute its height in constant time as well as compare the height of its children.

// Space complexity : O(n)\mathcal{O}(n)O(n). The recursion stack may go up to O(n)\mathcal{O}(n)O(n) if the tree is unbalanced.






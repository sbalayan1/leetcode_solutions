function TreeNode(val=null, left=null, right=null) {
    this.val = val
    this.left = left
    this.right = right
}

const sortedArrayToBST = (nums) => {
    return constructBST(nums, 0, nums.length-1)
}

const constructBST = (arr, left, right) => {
    if (left > right) return null
    const mid = Math.floor((left+right)/2)
    const head = new TreeNode(arr[mid], constructBST(arr, left, mid-1), constructBST(arr, mid+1, right))
    return head
}

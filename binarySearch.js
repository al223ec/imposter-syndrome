// recursive example
// Factorial(!)
// 4! = 4 * 3 * 2 * 1
function factorial(n) {
    if (n === 1) {
        return n;
    }

    return n * factorial(n - 1);
}
/* eslint-disable */
console.log(factorial(4));
/* eslint-enable */


const TRAVERSAL_ORDER = {
    IN_ORDER: 'in-order',
    PRE_ORDER: 'pre-order',
    POST_ORDER: 'post-order',
};

// Binary Search Tree
// O (log n)
// faster than a linkedlist
// Dictionary
// Phonebook
// Users

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.value) {
            if (!this.left) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else if (value > this.value) {
            if (!this.right) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if (value === this.value) {
            return true;
        }

        if (value < this.value) {
            if (!this.left) {
                return false;
            }
            return this.left.contains(value);
        }

        if (!this.right) {
            return false;
        }

        return this.right.contains(value);
    }

    depthFirstTraversal(iteratorFunc, order) {
        if (order === TRAVERSAL_ORDER.PRE_ORDER) {
            iteratorFunc(this.value);
        }

        if (this.left) {
            this.left.depthFirstTraversal(iteratorFunc, order);
        }

        if (order === TRAVERSAL_ORDER.IN_ORDER) {
            iteratorFunc(this.value);
        }

        if (this.right) {
            this.right.depthFirstTraversal(iteratorFunc, order);
        }

        if (order === TRAVERSAL_ORDER.POST_ORDER) {
            iteratorFunc(this.value);
        }
    }

    breadthFirstTraversal(iteratorFunc) {
        const queue = [this];
        while (queue.length) {
            const treeNode = queue.shift();
            iteratorFunc(treeNode.value);
            if (treeNode.left) {
                queue.push(treeNode.left);
            }
            if (treeNode.right) {
                queue.push(treeNode.right);
            }
        }
    }

    getMinVal() {
        if (this.left) {
            return this.left.getMinVal();
        }

        return this.value;
    }

    getMaxVal() {
        if (this.right) {
            return this.right.getMaxVal();
        }

        return this.value;
    }
}

// ----------------------------------
//                 50
//          30           70
//      20      45    60      100
//  10      35     59       85  105
const bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

/* eslint-disable */
// console.log(bst.right.right); // 100
// console.log(bst.contains(50));

// console.log(bst.contains(99888));

// bst.depthFirstTraversal(log, TRAVERSAL_ORDER.IN_ORDER);
// bst.depthFirstTraversal(log, TRAVERSAL_ORDER.PRE_ORDER);
// bst.depthFirstTraversal(log, TRAVERSAL_ORDER.POST_ORDER);

// bst.breadthFirstTraversal(log);

function log(value) {
    console.log(value);
}

log(bst.getMinVal());
log(bst.getMaxVal());
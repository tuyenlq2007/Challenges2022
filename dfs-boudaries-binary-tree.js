// Iterative Queue based javascript program
// to do level order traversal
// of Binary Tree
//Example 2

//Input:
//    ____1_____
//   /          \
//  2            3
// / \          / 
//4   5        6   
//   / \      / \
//  7   8    9  10  
       
//Ouput:
//[1,2,4,7,8,9,10,6,3]

// Class to represent Tree node
class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

// Given a binary tree. Print its nodes
// in level order using array for implementing queue
function printBoundaryTree() {
    console.log(root.data)
	dfsLeft(root.left);
	dfsLeaf(root);
	dfsRight(root.right);
}
//di ve phia trai
function dfsLeft(node){
    if (node==null || node.left==null && node.right==null) return
    console.log(node.data)
    if (node.left != null) dfsLeft(node.left)
    //trai null thi di ve phai
    else dfsLeft(node.right)
}
//di ve phia phai
function dfsRight(node){
    if (node==null || node.left==null && node.right==null) return
    console.log(node.data)
    if (node.right != null) dfsRight(node.right)
    //phai null thi di ve trai
    else dfsRight(node.left)
}

function dfsLeaf(node){
    if (node == null) return
    if (node.left==null && node.right==null) {
        console.log(node.data);
        return
    }
    dfsLeaf(node.left)
    dfsLeaf(node.right)
}

// creating a binary tree and entering the nodes
	var root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node (5)
	root.left.right.left = new Node(7);
	root.left.right.right = new Node(8);

	root.right.left = new Node(6);
	root.right.left.left = new Node(9)
	root.right.left.right=new Node(10)
	console.log("Boundaries of binary tree are - ");
	printBoundaryTree();

// This code is contributed by umadevi9616

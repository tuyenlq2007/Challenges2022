class Node
{ 

    constructor(data) 

    { 

        this.data = data; 

        this.left = null; 

        this.right = null; 

    }
    
} 


// Binary Search tree class
class BinarySearchTree
{ 

    constructor() 

    { 

        // root of a binary search tree 

        this.root = null; 
        this.queue = new Set();
        this.burned = new Set();

    }


    // function to be implemented 

    // insert(data) 

    // remove(data) 

                 


    // Helper function 

    // findMinNode() 

    // getRootNode() 

    // inorder(node) 

    // preorder(node)               

    // postorder(node) 

    // search(node, data)
    
// returns root of the tree
getRootNode()
{ 

    return this.root;
}
    
// helper method which creates a new node to 
// be inserted and calls insertNode
insert(data)
{ 

    // Creating a node and initialising 

    // with data 

    var newNode = new Node(data); 

                     

    // root is null then node will 

    // be added to the tree and made root. 

    if(this.root === null) 

        this.root = newNode; 

    else


        // find the correct position in the 

        // tree and add the node 

        this.insertNode(this.root, newNode);
}

// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data 
insertNode(node, newNode)
{ 

    // if the data is less than the node 

    // data move left of the tree 

    if(newNode.data < node.data) 

    { 

        // if left is null insert node here 

        if(node.left === null) 

            node.left = newNode; 

        else


            // if left is not null recur until 

            // null is found 

            this.insertNode(node.left, newNode); 

    }


    // if the data is more than the node 

    // data move right of the tree 

    else 

    { 

        // if right is null insert node here 

        if(node.right === null) 

            node.right = newNode; 

        else


            // if right is not null recur until 

            // null is found 

            this.insertNode(node.right,newNode); 

    }
} 

// Performs inorder traversal of a tree
inorder(node)
{ 

    if(node !== null) 

    { 

        this.inorder(node.left); 

        console.log(node.data); 

        this.inorder(node.right); 

    }
}

// search for a node with given data
burn(node, data)
{
// if trees is empty return null
	if(node === null || this.burned.has(data))
		return null;

	// if data is less than node's data
	// move left
	else if(data < node.data){
    if (!this.burned.has(node.data)) this.queue.add(node.data)
		return this.burn( node.left, data);
   }
	// if data is more than node's data
	// move right
	else if(data > node.data){
	  if (!this.burned.has(node.data)) this.queue.add(node.data)
		return this.burn(node.right, data);
  }
	// if data is equal to the node data
	// return node
	else {
	  this.burned.add(node.data)
	  if (node.left !=null && !this.burned.has(node.left.data)) this.queue.add(node.left.data)
    if (node.right !=null && !this.burned.has(node.right.data)) this.queue.add(node.right.data)
    return node;
	}
		
}

}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(13);
BST.insert(22);
BST.insert(27);
BST.insert(5);
BST.insert(9);
BST.insert(17);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 


var root = BST.getRootNode(); 
BST.burn(root,25)
console.log("burn", BST.burned)
console.log("queue", BST.queue)
while (BST.queue.size > 0){
first = [...BST.queue][0];
BST.queue.delete(first)
BST.burn(root, first)
}
console.log("burn", BST.burned)
console.log("queue", BST.queue)





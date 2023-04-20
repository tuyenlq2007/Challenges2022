
class Node
{
  value=0
  next=null
  constructor(value,next){
    this.value = value
    this.next = next
  }
  getvalue(){
    return this.value
  }
}

function detectAndRemoveLoop(head){
  fast=head.next
  slow=head
  point = head
  while (fast.getvalue() != slow.getvalue()){
    //console.log(fast.getvalue())
    fast = fast.next.next
    slow = slow.next
  }
  slow.next = null
}

function printList(node) {
        while (node != null) {
          console.log(node.getvalue())
          node = node.next;
        }
    }
    
// Driver code
head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);
// Creating a loop for testing
head.next.next.next.next.next = head.next.next;
detectAndRemoveLoop(head)
printList(head)


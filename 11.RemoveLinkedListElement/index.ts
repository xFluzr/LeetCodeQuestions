class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head){
   return head;
  }
  let curr=new ListNode(-1);     //Creating a helper node -1 (an element which is befor list)
  curr.next=head;              
  head=curr;                    // head is now pointer to curr
  while(curr.next!==null){      
   if(curr.next.val===val){     //if next value is === value 
     curr.next=curr.next.next;  // we skip this element by setting pointer to the next ListNode
   }else{
     curr=curr.next;            //if the value is not found we go to the next element
   }
  }
  return head.next;             //We have to return head.next becasue current element returns -1 and then rest of the list
 }
 

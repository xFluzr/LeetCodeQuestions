class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if(head===null){
    return null;
  }
  let prev:ListNode=null;
  let cur:ListNode=head;
  let next:ListNode=null;
  while(cur!=null){
    next=cur.next;
    cur.next=prev;
    prev=cur;
    cur=next;
  }
  return prev;
}

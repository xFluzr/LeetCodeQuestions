class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/* 
We are creating an empty list in first two lines;
then we are iterating through both lists, and checking which value if bigger
if val of list1 is bigger we are making a pointer on list1.next value.
When one of lists was iterated through we are pointing to rest of the another list
*/


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head:ListNode=new ListNode;
    let current:ListNode=head;
    while(list1 && list2){
        if(list1.val>list2.val){
          current.next=list2;
          list2=list2.next;
        }else{
          current.next = list1;
          list1=list1.next;
        }
        current=current.next;
    }
    current.next=list1 || list2;
    return head.next;
};

//@ts-nocheck
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// In this example we dont keep track of the tail? why?
// Because there's no point of using those, all that matters is if there's a cycle, if it's pointing to previous nodes.
// I actually had a struggle with this and Needed to search for explanation why we need Floyd's Tortoise and Hare algorithm.
// One simple way to try to explain how I understood this is: 
// Think about the moon and the sun. Sometimes they meet right? and then there's an eclipse because they don't move at same speed so they meet each other some time.
function hasCycle(head: ListNode | null): boolean {
    let s = head;
    let f = head;



    // if there's a next we keep looping
    while(f && f.next ){
        // move by 1
        s = s.next
        // move by 2
        f = f.next.next
        if(s == f){
            return true
        }
    }
    return false;
};
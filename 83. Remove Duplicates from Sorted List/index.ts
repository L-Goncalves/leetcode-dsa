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

// @ts-nocheck
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;

    while(current){
        while(current.next && current.next.val == current.val){
            current.next = current.next.next;
        }

        current = current.next;
    }

    return head;
};
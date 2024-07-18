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
/*
    Runtime: 54ms Beats 96.67%
    Memory: 52.19MB Beats 77.88%

*/


// @ts-nocheck
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head;

    // we need to loop once in our list to check the length of the list
    let current = head;
    let size = 1;

    while(current.next){
        current = current.next;
        size+=1;
    }

    current.next = head;

    k = size - (k%size)

    while(k>0){
        current = current.next;
        k-=1;
    }

    head = current.next;
    current.next = null;
    return head;
};
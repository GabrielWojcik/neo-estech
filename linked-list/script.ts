class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

function printLinkedList(head: ListNode | null): void {
    let current = head;
    const result: number[] = [];
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    console.log('Resultado: ' + result.join(' -> '));
}

const head = createLinkedList([1, 1, 2, 3, 3]);
const newHead = deleteDuplicates(head);
printLinkedList(newHead); 

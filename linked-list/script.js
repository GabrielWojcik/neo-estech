var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function deleteDuplicates(head) {
    if (head === null)
        return null;
    var current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
}
function createLinkedList(arr) {
    if (arr.length === 0)
        return null;
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function printLinkedList(head) {
    var current = head;
    var result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}
var head = createLinkedList([1, 1, 2, 3, 3]);
var newHead = deleteDuplicates(head);
printLinkedList(newHead); 

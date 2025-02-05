Este projeto tem como objetivo apresentar uma ferramenta de verificação de anagramas, além de um script que remove elementos duplicados de uma lista.
Você também pode acessar o anagrama pela seguinte URL: https://neo-estech-five.vercel.app/

Como Rodar o Projeto Anagramas
  1 - Clone o repositório;
  2 - Instale a extensão Live Server em seu VS CODE;
  3 - Selecione o arquivo "index.html" presente dentro da pasta "Anagramas" e execute com o Live Server;

Como Executar o Script que remove elementos duplicados de uma lista
  1 - Certifique-se que possui o typescript instalado de forma global em sua máquina rodando o comando "npm install -g typescript";
  2 - Acesse a pasta "linked-list";
  3 - Rode o comando "node .\script.ts", após isso o código deverá ser executado em seu terminal.

Template Anagramas:
![Screenshot_7](https://github.com/user-attachments/assets/bd03e5d0-9b71-40f6-8ebe-8e800c4e77d6)

Código linked-list:

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

Resultado :
![Screenshot_3](https://github.com/user-attachments/assets/a3ec7b86-2bed-4a66-8cb9-2bcd6b83f401)


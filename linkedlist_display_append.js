// You need these constructor functions to run your code

function SLL() {
  this.head = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function display(list) {
  if (!list.head) {
    return "";
  }
  //var res = [];
  var str = "";
  var runner = mySLL.head;
  while(runner.next != null) {
    //res.push(runner.val);
    str += runner.val + ", ";
    runner = runner.next;
  }
  str += runner.val;
  return str;
}

var mySLL = new SLL();
mySLL.head = new ListNode(5);
mySLL.head.next = new ListNode(7);
mySLL.head.next.next = new ListNode(8);
// console.log(linkedlist);



function append(list, val) {
  //var res = [];
  var runner = list.head;
  while(runner.next != null) {
    
    runner = runner.next;
  }
  
  //res.push(runner.val);
  runner.next = new ListNode(9);
}

var mySLL = new SLL();
mySLL.head = new ListNode(5);
mySLL.head.next = new ListNode(7);
mySLL.head.next.next = new ListNode(10);

append(mySLL, 9);
console.log(display(mySLL));
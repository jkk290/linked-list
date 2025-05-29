import { LinkedList } from "./linkedListFactory.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("mouse");

console.log(list.toString());

console.log(list.size());

console.log(list.getHead());

console.log(list.tail());

console.log(list.at(3));

list.pop();
console.log(list.toString());

console.log(list.contains('parrot'));

console.log(list.find('cat'));

list.insertAt('monkey', 4);
console.log(list.toString());

list.removeAt(4);
console.log(list.toString());
let myMap = new Map();
myMap.set(1,'red');
myMap.set(2,'orange');
myMap.set(3,'yellow');
myMap.set(4,'green');
myMap.set(5,'blue');
myMap.set(6,'indigo');
myMap.set(7,'violet');
console.log(myMap.keys());
for (let number of myMap.keys()){
    console.log('Ключ - X',number);
};
for (let number of myMap.values()){
    console.log('Значание  - Y',number);
};
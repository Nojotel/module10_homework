let arr = [5,5,55,5,5];
let result = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        result = false 
        break
    }
}
console.log(result)
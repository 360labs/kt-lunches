# Data Transforms

## Array functions
- `Array.forEach()`
- `Array.map()`
- `Array.filter()`
- `Array.some()`
- `Array.every()`
- `Array.reduce()`
- `Array.sort()`
- `Array.from()`

### Get all odd numbers
```js
var nums = [2,3,4,5,7,8,10,13,20,23];
var odds = nums.filter(n => n%2===1);
```

### Summing an array
```js
var nums = [2,3,4,5,7,8,10,13,20,23];
var sum = nums.reduce((a,b) => a+b, 0);
```

### Map an array of strings to numbers
```js
var str = '1 2 3 4 5';
var strParts = str.split(' ');
var nums = strParts.map(s => +s);
```

### Map an array to it's square
```js
var nums = [1,2,3,4,5,10];
var squares = nums.map(n => n*n);
```

### Sort an array of numbers
```js
var nums = [10,6,8,1,3,-1, 11];
var smallFirst = nums.sort((a,b) => a-b);
var largeFirst = nums.sort((a,b) => b-a);
```

### Create an array inline
```js
var sequence = Array.from({length:10}).map((u,i) => i);		// [0,1,2,3,4,5,6,7,8,9]
var randomInts = Array.from({length:10}).map((u,i) => Math.round(Math.random()*100));	// 10 random integers
```



## Students Example

Here we created a script that will generate 10 random students, each looking like:

```js
{
    name: 'Student 1',
    grade: 10,
    scores: [64, 89, 65, 70, 66, 89, 70, 64, 70, 97]
}
```

We want to know:
- Which student had the highest (average) score
- Which grade had the students with the highest (average) score

See [`students.js`](students.js).
# random-math
NPM package for versatile randomization functions, Python-inspired, covering numbers, arrays, choices, characters, and colors.

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>


# Installation

```shell
npm i random-math
```

# Usage
<!-- import Random from 'random-math'; -->

> Using traditional method for Node.js projects that follow the CommonJS module system:

```js
const Random = require('random-math');
```
> for modern JavaScript projects using ESM:

```js
import Random from 'random-math';
```

### Generate a random string of 12 characters

```js
const randomString = Random.stringFromChars(undefined, 12);
console.log(randomString);
```
- Example Random Output:  ```13z1ayayz2ab```

### Generate an array of 30 random numbers between 0 and 1

```js
const randomNumbers = Random.multiFloat(0, 1, 30);
console.log(randomNumbers);
```

### Generate a random floating-point number between 65 and 98

```js
const randomFloat = Random.float(65, 98);
console.log(randomFloat);
```

### Shuffle an array

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledNumbers = Random.shuffle(numbers);
console.log(shuffledNumbers);
```

### Pick a random item from an array

```js
const cricketer = ["virat", "dhoni", "sachin", "ashwin", "bumrah"];
const randomcrick = Random.choice(cricketer);
console.log(randomcrick);
```


### Generate a random RGB color

```js
const randomRGB = Random.rgb();
console.log(randomRGB);
```

- Example Random Output:  ```rgb(211, 215, 118)```


### Generate a random HSL color

```js
const randomHSL = Random.hsl();
console.log(randomHSL);
```

- Example Random Output:  ```hsl(313, 91%, 25%)```



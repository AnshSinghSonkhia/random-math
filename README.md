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

###  Generating a Random String with Custom Characters:

```js
const specialChars = "!@#$%^&*";
const randomString = Random.stringFromChars(specialChars, 15);
console.log(randomString);

// Generates a random string of 15 characters from special characters
```

- Example Random Output:  ```@^#&^&@*$%!*^$$```

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

###  Generating an Integer Within a Range (example, 10 to 20):

```js
const randomInt = Random.int(10, 20);
console.log(randomInt);
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

### Picks a random character from a string

```js
const message = "Hello, world!";
const randomChar = Random.choice(message);
console.log(randomChar);
```

### Picks `n` number of random characters from a string

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomSample = Random.sample(alphabet, 3);
console.log(randomSample);

// It will Pick 3 random characters from the string, "alphabet"
```

- Example Random Output:  ```[ 'w', 'l', 'r' ]```

### Generate a random Hex color code

```js
const randomHex = Random.hex();
console.log(randomHex);
// Outputs a random hex color code (e.g., #F2A34B)

```
- Example Random Output:  ```#252096```

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

### Flips the coin to randomly return `Heads` or `Tails`

- `Unbiased Coin` - Randomly returns "heads" or "tails" with equal probability (0.5) or half.

```js
const randomOutcome = Random.coinFlip();
console.log(randomOutcome);
```
> Example Random Output:  ```tails```

- `Biased Coin` - Returns "heads" with the given X% probability and "tails" with (100-X)% probability

```js
// Flip a coin with a 70% chance of heads
const biasedOutcome = Random.coinFlip(0.7);
// Returns "heads" with 70% probability and "tails" with 30% probability
console.log(biasedOutcome);
```

> Example Random Output:  ```heads```
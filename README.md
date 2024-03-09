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

### uuid - Generates a Random "Universally Unique Identifier" (UUIDv4).

```js
const randomUUID = Random.uuid();
console.log(randomUUID);
// Output will be a string in the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

> Example Random Output:  ```f317952b-01fc-4442-8533-219470b5a20b```

### customUUID - You can customize the UUID you want to randomly generate

- Example 1:

```js
const customId = Random.customUUID("xxxx-xxxx-xxxx-xxxx");
console.log(customId);
```

> Example Random Output:  ```4e4e-6730-536a-7b45```

- Example 2:

```js
const customCode = Random.customUUID("yyy_yyy_yyy");
console.log(customCode);
```

> Example Random Output:  ```1b2_79b_782```

- Example 3:

```js
const customToken = Random.customUUID("xx-xx-xx-yy-xxxxxxxx");
console.log(customToken);
```

- Example Random Output:  ```12-92-28-9f-5c219e65```

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

### `password`: Generate a random password with specified criteria (length, complexity).

```js
const lowPassword = Random.password(6, "low");
console.log(lowPassword);     // example output:  f8iis2
const mediumPassword = Random.password(10, "medium");
console.log(mediumPassword);  // example output:  lwf5cn$ePw
const highPassword = Random.password(16, "high");
console.log(highPassword);    // example output:  "{)#lhI>N4"xiW*@
```

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

- Example Random Output: ```[6, 4, 1, 7, 5, 2, 9, 8, 3]```


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

### `grayscale`: Generate random grayscale color.

```js
console.log(Random.grayscale());
// returns a random grayscale color in RGB format
```

- Example Random Output:  ```rgb(139,139,139)```

### `complimentaryColor` : Generate a random color complementary to a given color.

```js
console.log(Random.complimentaryColor("rgb(100,200,250)"));
// returns - rgb(250,150,100)

console.log(Random.complimentaryColor("hsl(120,50%,50%)"));
// returns - hsl(300,50.00%,50.00%)
```

### `randomShade`: Generate a random shade (darker version) of a given color.

```js
console.log(Random.randomShade("#ff0000"));
// Output a random shade of red
```

- Example Random Output:  ```#d90000```

### `randomTint`: Generate a random tint (lighter version) of a given color.

```js
console.log(Random.randomTint("#ff0000"));
// Output a random tint of red
```

- Example Random Output:  ```#ff2525```

### Randomly return "heads" or "tails" with custom probabilities.

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

### Randomly returns `true` or `false`

```js
const randomBool = Random.bool();
console.log(randomBool);
```

### Generate a random subset of elements from an array.

```js
const numbers = [1, 2, 3, 4, 5, 6];

// Generate a random subset with size 3 (can vary)
const randomSubset = Random.subset(numbers, 3);
console.log(randomSubset);
```

> Example Random Output:  ```[ 6, 4, 2 ]```

### Generate the `Power Set` of the given Set

```js
const colors = ["red", "green", "blue"];
const allColorCombinations = Random.powerSet(colors);
console.log(allColorCombinations);
```
> Example Random Output:  ```[
  [],
  [ 'red' ],
  [ 'green' ],
  [ 'red', 'green' ],
  [ 'blue' ],
  [ 'red', 'blue' ],
  [ 'green', 'blue' ],
  [ 'red', 'green', 'blue' ]
]```


```js
const ayaa = [1, 2, 3];
const powerAyaa = Random.powerSet(ayaa);
console.log(powerAyaa);
```

> Example Random Output:  ```[
  [],       [ 1 ],
  [ 2 ],    [ 1, 2 ],
  [ 3 ],    [ 1, 3 ],
  [ 2, 3 ], [ 1, 2, 3 ]
]```

### Generate all possible permutations of an array.

> **NOTE:** It can be computationally expensive for large arrays

```js
const letters = ["x", "y", "z"];
// Generate all permutations of the letters array
const allPermutations = Random.permute(letters);
console.log(allPermutations);

// Output will show all possible orderings of the letters
```

> Example Random Output:  ```[
  [ 'x', 'y', 'z' ],
  [ 'x', 'z', 'y' ],
  [ 'y', 'x', 'z' ],
  [ 'y', 'z', 'x' ],
  [ 'z', 'x', 'y' ],
  [ 'z', 'y', 'x' ]
]```
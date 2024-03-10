# random-math
NPM package for versatile randomization functions, Python-inspired, covering numbers, arrays, choices, characters, and colors.

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>


# Installation

```shell
npm i random-math
```

> for modern JavaScript projects using ESM:

```js
import Random from 'random-math';
```

> Using traditional method for Node.js projects that follow the CommonJS module system:

```js
const Random = require('random-math');
```

# Usage

### `uuid`: Generates a Random "Universally Unique Identifier" (UUIDv4).

```js
const randomUUID = Random.uuid();
console.log(randomUUID);
// Output will be a string in the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

> Example Random Output:  ```f317952b-01fc-4442-8533-219470b5a20b```

### `customUUID`: You can customize the UUID you want to randomly generate

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

### `password`: Generate a random password with specified criteria (length, complexity).

```js
const lowPassword = Random.password(6, "low");
console.log(lowPassword);     // example output:  f8iis2
const mediumPassword = Random.password(10, "medium");
console.log(mediumPassword);  // example output:  lwf5cn$ePw
const highPassword = Random.password(16, "high");
console.log(highPassword);    // example output:  "{)#lhI>N4"xiW*@
```

### `stringFromChars`: Generates a random string of 12 characters

```js
const randomString = Random.stringFromChars(undefined, 12);
console.log(randomString);
```
- Example Random Output:  ```13z1ayayz2ab```

###  `stringFromChars`: Generates a Random String with Custom Characters:

```js
const specialChars = "!@#$%^&*";
const randomString = Random.stringFromChars(specialChars, 15);
console.log(randomString);

// Generates a random string of 15 characters from special characters
```

- Example Random Output:  ```@^#&^&@*$%!*^$$```

### `multiFloat`: Generates an array of n random numbers between specific range.

```js
const randomNumbers = Random.multiFloat(0, 1, 30);  // 30 random numbers between 0 and 1
console.log(randomNumbers);
```

### `float`: Generates a Random floating-point number within a Range

```js
const randomFloat = Random.float(65, 98);   // range is 65-98
console.log(randomFloat);
```

###  `int`: Generates a Random Integer within a Range

```js
const randomInt = Random.int(10, 20);   // range is 10-20
console.log(randomInt);
```

### `shuffle`: Randomly shuffles an array

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledNumbers = Random.shuffle(numbers);
console.log(shuffledNumbers);
```

- Example Random Output: ```[6, 4, 1, 7, 5, 2, 9, 8, 3]```


### `choice`: Picks a random item from an array

```js
const cricketer = ["virat", "dhoni", "sachin", "ashwin", "bumrah"];
const randomcrick = Random.choice(cricketer);
console.log(randomcrick);
```

### `choice`: Picks a random character from a string

```js
const message = "Hello, world!";
const randomChar = Random.choice(message);
console.log(randomChar);
```

### `sample`: Randomly picks `n` number of random characters from a string

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomSample = Random.sample(alphabet, 3);    // here, n = 3
console.log(randomSample);

// It will Pick 3 random characters from the string, "alphabet"
```

- Example Random Output:  ```[ 'w', 'l', 'r' ]```

### `hex`: Generates a random Hex color code

```js
const randomHex = Random.hex();
console.log(randomHex);
// Outputs a random hex color code (e.g., #F2A34B)

```
- Example Random Output:  ```#252096```

### `rgb`: Generates a random RGB color

```js
const randomRGB = Random.rgb();
console.log(randomRGB);
```

- Example Random Output:  ```rgb(211, 215, 118)```


### `hsl`: Generate a random HSL color

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

### `coinFlip`: Randomly return "heads" or "tails" with custom probabilities.

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

### `bool`: Randomly returns `true` or `false`

```js
const randomBool = Random.bool();
console.log(randomBool);
```

### `subset`: Generates a random subset of elements from an array.

```js
const numbers = [1, 2, 3, 4, 5, 6];

// Generate a random subset with size 3 (can vary)
const randomSubset = Random.subset(numbers, 3);
console.log(randomSubset);
```

> Example Random Output:  ```[ 6, 4, 2 ]```

### `powerSet`: Generates the `Power Set` of the given Set

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

### `permute`: Generates all possible permutations of an array.

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

### `rollDice`: Generates a random simulated result of rolling a die with a specified number of sides.

1. To roll a standard 6-sided die:

```js
const roll1 = Random.rollDice();
console.log(roll1);     // output -> 1 to 6
```

2. To roll a 10-sided die:

```js
const roll2 = Random.rollDice(10);
console.log(roll2);     // output -> 1 to 10
```

### `shuffleDeck`: Randomly shuffle a deck of cards (array of card objects).

```js
const deck = [
	{ value: "Ace", suit: "Spades" },
	{ value: "King", suit: "Hearts" },
	{ value: "Queen", suit: "Diamond" },
	// ... (add more card objects to the deck)
  ];
  
  const shuffledDeck = Random.shuffleDeck(deck);
  console.log(shuffledDeck);
  // Random Output: An array of card objects in a shuffled order
```

### `pickCard`: Returns a random card from a standard deck of 52 cards

```js
const randomCard = Random.pickCard();
console.log(randomCard);
```

- Example Random Output:  ```{ card: 'King', suit: 'Diamonds' }```

### `even`: Generate a random even number within a range.

```js
// Generate even number between 20 and 50 (inclusive)
const randomEvenNumber = Random.even(20, 50);
console.log(randomEvenNumber);
```

- Example Random Output:  ```44```

### `odd`: Generate a random odd number within a range.

```js
// Generate odd number between 15 and 35 (inclusive)
const randomOddNumber = Random.odd(15, 35);
console.log(randomOddNumber);
```

- Example Random Output:  ```17```

### `prime`: Generate a random prime number within a range (computationally expensive).

```js
// Generate prime number between 50 and 400 (inclusive)
const randomPrimeNumber = Random.prime(50, 400);
console.log(randomPrimeNumber);
```

- Example Random Output:  ```367```

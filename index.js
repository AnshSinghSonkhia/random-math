const Random = {
  float: function (min, max) {
    // Return random floating-point number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min + 1) + min;
  },

  int: function (min, max) {
    // Return random whole number
    return Math.floor(Random.float(min, max));
  },

  shuffle: function (array) {
    // Move the items in an array into a random order
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  choice: function (thing) {
    // Pick a random letter from string or item from array
    if (typeof thing == "string" || Array.isArray(thing)) {
      return thing[Random.int(0, thing.length - 1)];
    } else {
      return `cannot pick from ${typeof thing}`;
    }
  },

  sample: function (sequence, lengthOfReturn) {
    let final = [];
    sequence = sequence.toString();
    for (let i = 0; i < lengthOfReturn; i++) {
      final.push(sequence[Random.int(0, sequence.length - 1)]);
    }
    return final;
  },

  stringFromChars: function (chars = "abc.xyz/123", len = 5) {
    let final = "";
    for (let i = 0; i < len; i++) {
      final += chars[Random.int(0, chars.length - 1)];
    }
    return final;
  },

  multiFloat: function (min = 0, max = 1, amt = 4) {
    let output = [];
    for (let i = 0; i < amt; i++) {
      output.push(Random.float(min, max));
    }
    return output;
  },

  hex: function () {
    const charset = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += charset[Random.int(0, charset.length - 1)];
    }
    return colorCode;
  },

  rgb: function () {
    return `rgb(${Random.int(0, 255)}, ${Random.int(0, 255)}, ${Random.int(
      0,
      255
    )})`;
  },

  hsl: function () {
    return `hsl(${Random.int(0, 360)}, ${Random.int(0, 100)}%, ${Random.int(
      0,
      100
    )}%)`;
  },

  coinFlip: function (headsProbability = 0.5) {
    // Validate probability input (between 0 and 1)
    if (headsProbability < 0 || headsProbability > 1) {
      throw new Error("Heads probability must be between 0 and 1");
    }

    // Generate random float between 0 and 1
    const randomValue = Math.random();

    // Return "heads" if random value is less than headsProbability, otherwise "tails"
    return randomValue < headsProbability ? "heads" : "tails";
  },
};

module.exports = Random;

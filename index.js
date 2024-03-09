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

  bool: function () {
    // Generate random float between 0 and 1
    const randomValue = Math.random();
  
    // Return true if random value is less than 0.5 (fair coin flip), otherwise false
    return randomValue < 0.5;
  },

  subset: function (array, size = Math.floor(Math.random() * (array.length + 1))) {
    // Validate input
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
  
    // Handle edge cases: empty array or requested size exceeding array length
    if (array.length === 0 || size > array.length) {
      return [];
    }
  
    // Use Fisher-Yates shuffle to randomize the array
    const shuffledArray = Random.shuffle([...array]); // Create a copy to avoid mutation
  
    // Select the desired subset size from the shuffled array
    return shuffledArray.slice(0, size);
  },

  powerSet: function (set) {
    // Validate input
    if (!Array.isArray(set)) {
      throw new Error("Input must be an array");
    }
  
    const powerSet = [];
  
    // Include an empty set as a base case
    powerSet.push([]);
  
    // Iterate through each element in the set
    for (const element of set) {
      const temp = [];
      // For each existing subset, create a new subset with the current element added
      for (const subset of powerSet) {
        temp.push(subset.concat(element));
      }
      // Add the newly created subsets with the current element to the powerSet
      powerSet.push(...temp);
    }
  
    return powerSet;
  },

  permute: function (array) {
    // Validate input
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
  
    // Base case: permutation of a single element is the element itself
    if (array.length === 1) {
      return [array];
    }
  
    const permutations = [];
    for (let i = 0; i < array.length; i++) {
      // Fix the current element and recursively permute the remaining elements
      const currentElement = array[i];
      const remaining = array.slice(0, i).concat(array.slice(i + 1));
      const subPermutations = Random.permute(remaining);
  
      // Insert the current element into all possible positions of each sub-permutation
      for (const subPermutation of subPermutations) {
        permutations.push([currentElement].concat(subPermutation));
      }
    }
  
    return permutations;
  },

  uuid: function () {
    // Check for modern browsers with crypto.randomUUID support (recommended)
    if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    } else {
      // Fallback for older environments (less secure)
      const chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
      return chars.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  },

  customUUID: function (formatString = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
    // Validate input format
    if (typeof formatString !== "string") {
      throw new Error("Format string must be a string");
    }
  
    const uuidParts = [];
    let currentSection = "";
  
    // Iterate through the format string
    for (let char of formatString) {
      if (/[^xy]/.test(char)) {
        // Handle literal characters
        currentSection += char;
      } else if (char === "x" || char === "y") {
        // Generate random character for "x" and "y" sections on demand
        currentSection += Math.floor(Math.random() * 16).toString(16);
      } else {
        // Throw error for unsupported format characters
        throw new Error(`Unsupported format character: ${char}`);
      }
  
      // Complete and separate sections as needed
      if (currentSection.length === (char === "x" || char === "y" ? 1 : currentSection.length)) {
        uuidParts.push(currentSection);
        currentSection = "";
      }
    }
  
    // Ensure all sections are completed
    if (currentSection.length > 0) {
      throw new Error("Incomplete format string section");
    }
  
    return uuidParts.join("");
  },

  password: function (length = 12, complexity = "medium") {
    // Validate input
    if (typeof length !== "number" || length <= 0) {
      throw new Error("Password length must be a positive number");
    }
    if (!["low", "medium", "high"].includes(complexity.toLowerCase())) {
      throw new Error("Invalid complexity level. Choose 'low', 'medium', or 'high'");
    }
  
    // Define character pools for different complexity levels
    const charPools = {
      low: "abcdefghijklmnopqrstuvwxyz0123456789",
      medium: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      high: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",<.>/?`~"
    };
  
    // Select character pool based on complexity
    const charPool = charPools[complexity.toLowerCase()];
  
    // Generate random password string
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charPool[Math.floor(Math.random() * charPool.length)];
    }
  
    // Ensure password meets minimum complexity requirements (optional)
    if (complexity !== "low") {
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*()]/.test(password) || (complexity === "high" && /[_+\-=\[\]{}|;':",.<>\/?`~]/.test(password)); // Corrected regular expression and added grouping parentheses
  
      if (!hasLowercase || !hasUppercase || !hasNumber || !hasSymbol) {
        // Regenerate password if minimum requirements not met
        return this.password(length, complexity);
      }
    }
  
    return password;
  },

  complimentaryColor: function (color) {
    // Function to convert RGB to HSL
    const rgbToHsl = function (r, g, b) {
      (r /= 255), (g /= 255), (b /= 255);
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h * 360, s * 100, l * 100];
    };

    // Function to convert HSL to RGB
    const hslToRgb = function (h, s, l) {
      let r, g, b;
      h /= 360;
      s /= 100;
      l /= 100;

      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = function (p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    // Helper function to ensure value stays within valid range
    const clamp = function (value, min, max) {
      return Math.min(Math.max(value, min), max);
    };

    // Convert input color to HSL
    let hslColor;
    if (color.startsWith("rgb")) {
      const [r, g, b] = color.match(/\d+/g);
      hslColor = rgbToHsl(parseInt(r), parseInt(g), parseInt(b));
    } else if (color.startsWith("hsl")) {
      hslColor = color.match(/\d+/g).map(Number);
    } else {
      throw new Error(
        "Unsupported color format. Only RGB and HSL formats are supported."
      );
    }

    // Calculate complementary hue
    let complementaryHue = (hslColor[0] + 180) % 360;

    // Convert complementary hue back to original format
    complementaryHue = clamp(complementaryHue, 0, 360);
    let complementaryColor;

    // Check the original format and convert back accordingly
    if (color.startsWith("rgb")) {
      const [r, g, b] = hslToRgb(complementaryHue, hslColor[1], hslColor[2]);
      complementaryColor = `rgb(${r},${g},${b})`;
    } else {
      complementaryColor = `hsl(${complementaryHue.toFixed(
        0
      )},${hslColor[1].toFixed(2)}%,${hslColor[2].toFixed(2)}%)`;
    }

    return complementaryColor;
  },
};

module.exports = Random;

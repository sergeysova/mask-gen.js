# Mask-Gen

Beauty generator

## Usage

```js
const generate = require('mask-gen')

const result = generate('DDD-AAA-XXX-HHH-FFF-OOO')
// '218-cXf-KgB-664-beb-347'
```

Generators:

 * `X` (symbol) - Any symbol _(`a-zA-Z0-9`)_
 * `A` (alphabetic) - Any alphabetic _(`A-Za-z`)_
 * `F` (hexletter) - Hex letter _(`a-fA-F`)_
 * `H` (hexsymbol) - Any HEX symbol _(`a-fA-F0-9`)_
 * `D` (digit) - Any digit symbol _(`0-9`)_
 * `O` (octal) - Octal symbol _(`0-7`)_

Modifiers:

 * `lowercase`
 * `uppercase`

#### Custom generators

```js
const result = generate('KB', {
  symbols: {
    K: function(symbol) {
      return Math.floor(Math.random() * symbol.charCodeAt(0))
    },
    B: function() {
      return ['E', 'D', 'X', '0'][Math.floor(Math.random() * 4)]
    },
  },
})
// '59E'
```

### Modifiers

```js
const result = generate('AAA', { mods: ['uppercase'] })
// 'DXO'
```

#### Overriding

```js
// ECMAScript 2015
const result = generate('XXXX-AES-DDD-BBB', {
  symbols: {
    A: sym => sym,
    B: 'alphabetic',
  },
})
// 'dXga-AES-885-fOl'
```

#### UUID4-like

```js
const result = generate('XXXXXXXX-XXXX-4XXX-XXXX-XXXXXXXXXXXX', { mods: ['lowercase'] })
// 'ib6jysj1-peli-4tgs-k4iw-jukcymo02mgd'
```

#### Counter-Strike key

```js
const result = generate('5RP2E-HHHHH-HHHHH-HHHHH-HHHHH', { mods: ['uppercase'] })
// '5RP2E-0AF71-DADDE-CA606-FC67D'
```

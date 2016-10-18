const gen = require('../src/index.js')

describe('generator', () => {

  describe('string mask', () => {

    test('defined', () => {
      expect(gen).toBeDefined()
    })

    const mask = 'DDD-AAA-XXX-HHH-FFF-OOO'

    test(`generate default settings '${mask}'`, () => {
      const result = gen(mask)
      const regexp = /^\d{3}-[a-zA-Z]{3}-[a-zA-Z0-9]{3}-[a-fA-F0-9]{3}-[a-fA-F]{3}-[0-7]{3}$/

      expect(result).toMatch(regexp)
    })

    test('with custom text within `XXXXX-XXXXX-KEY-XXXXX`', () => {
      const result = gen('XXXXX-XXXXX-KEY-XXXXX')
      const regexp = /^\w{5}-\w{5}-KEY-\w{5}$/

      expect(result).toMatch(regexp)
    })

    describe('generators', () => {

      test('generate with custom symbol G: 1', () => {
        const G = sym => '1'
        const result = gen('GGG', { symbols: { G } })

        expect(result).toBe('111')
      })

      test('generate with override symbols A: 2', () => {
        const G = sym => '1'
        const A = sym => '2'
        const result = gen('AAGG', { symbols: { G, A } })

        expect(result).toBe('2211')
      })

      test('override with original generator', () => {
        const result = gen('DD-EE', { symbols: { E: 'digit' } })
        const regexp = /^\d{2}-\d{2}$/

        expect(result).toMatch(regexp)
      })

    })

    describe('modifiers', () => {

      test('generate with `uppercase`', () => {
        const result = gen('AAAAA', { mods: ['uppercase'] })
        const regexp = /^[A-Z]{5}$/

        expect(result).toMatch(regexp)
      })

      test('generate with `lowercase`', () => {
        const result = gen('AAAAA', { mods: ['lowercase'] })
        const regexp = /^[a-z]{5}$/

        expect(result).toMatch(regexp)
      })

    })

  })

})

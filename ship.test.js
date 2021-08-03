describe('checkForShip', () => {
  const checkForShip = require('./ship').checkForShip

  test('should correctly report no ship at a given players coordinate', () => {
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    }

    expect(checkForShip(player, [9, 9])).toBe(false)
  })

  test('should correctly report a ship located at the given players coordinate', () => {
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    }

    expect(checkForShip(player, [0, 0])).toBe(true)
  })

  test('should handle ships located at more then one coordinate', () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    }

    expect(checkForShip(player, [0, 0])).toBe(true)
    expect(checkForShip(player, [0, 1])).toBe(true)
    expect(checkForShip(player, [9, 9])).toBe(false)
  })

  test('should handle checking multiple ships', () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    }

    expect(checkForShip(player, [0, 0])).toBe(true)
    expect(checkForShip(player, [0, 1])).toBe(true)

    expect(checkForShip(player, [1, 0])).toBe(true)
    expect(checkForShip(player, [1, 1])).toBe(true)

    expect(checkForShip(player, [2, 3])).toBe(true)

    expect(checkForShip(player, [9, 9])).toBe(false)
  })
})

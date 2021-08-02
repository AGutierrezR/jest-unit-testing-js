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
})

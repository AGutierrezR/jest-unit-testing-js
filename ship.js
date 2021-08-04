const checkForShip = (player, coordiantes) => {
  let shipPresent, ship

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i]
    shipPresent = ship.locations.filter((actualCoordiante) => {
      return (
        actualCoordiante[0] === coordiantes[0] &&
        actualCoordiante[1] === coordiantes[1]
      )
    })[0]

    if (shipPresent) return true
  }
  return false
}

const damageShip = (ship, coordinates) => {
  ship.damage.push(coordinates)
}

module.exports.checkForShip = checkForShip
module.exports.damageShip = damageShip

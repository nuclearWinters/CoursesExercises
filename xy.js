const areaWildPokemon = { x: 30, y: 209.4545440673828 };

const points = [
  { x: 88.7272720336914, y: 286.9090881347656 },
  { x: 88.7272720336914, y: 302.9090881347656 },
  { x: 104.7272720336914, y: 286.9090881347656 },
  { x: 104.7272720336914, y: 302.9090881347656 },
];

for (const point of points) {
  if (
    point.x >= areaWildPokemon.x &&
    point.x <= areaWildPokemon.x + 90 &&
    point.y >= areaWildPokemon.y &&
    point.y <= areaWildPokemon.y + 90
  ) {
    console.log("Esta adentro");
    break;
  } else {
    console.log("No esta dentro");
  }
}

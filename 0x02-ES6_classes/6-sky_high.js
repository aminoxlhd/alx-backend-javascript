import Building from './5-building.js';

const a = new Building(100);
console.log(a);

class TestBuilding extends Building { }

try {
  new TestBuilding(200)
}
catch (er) {
  console.log(er);
}

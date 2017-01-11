var chainify = require('../src/chainify');

var myCar = makeCar()
    .color('red')
    .brand('nissan')
    .kind('pick up')
    .doors(2);

console.log(myCar.specifications());

function makeCar() {
  var car = {};
  
  return chainify.call(car, { specifications: () => car })
    .field('color', 'white') // by default all cars are white
    .field('kind', 'sedan') // all sedan, you need to specify if you want coupe or pick up or other
    .field('brand')
    .field('doors', 4)
    .value();
}


var chainify = require('../src/chainify');

function motorBuilder() {
    var motor = {};
    var builder;

    return motor  = chainify.call(motor, { specifications: () => motor })
        .field('liters', 3.6)
        .field('type', 'V6')
        .value();
}

function makeCar() {
    var motor = motorBuilder();
    var car = { motor: motor.specifications() };
    var builder;

    return builder = chainify.call(car, { specifications: () => car })
        .field('doors', 4)
        .field('passengers', 4)
        .field('kind', 'sedan')
        .method('motor', spec => spec(motor))
        .method('switchEngine', () => car['on'] = !car['on'])
        .value()
}

var car = makeCar()
    .doors(2)
    .passengers(2)
    .motor(m => m.liters(4.0).type('V8'))
    .kind('pick-up')
    .switchEngine();

console.log(car.specifications()); 


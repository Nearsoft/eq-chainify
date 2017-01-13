var chainify = require('../src/chainify');

function makeMotor() {
    var motor = {};
    var builder;

    return builder  = chainify.call(motor, { specifications: () => motor })
        .field('liters', 3.6)
        .field('type', 'V6')
        .value()
}

function makeCar() {
    var car = {};
    var builder;

    return builder = chainify.call(car, { specifications: () => car })
        .field('doors', 4)
        .field('passengers', 4)
        .field('kind', 'sedan')
        .field('motor', makeMotor().specifications())
        .method('switchEngine', () => car['on'] = !car['on'])
        .value()
}

var car = makeCar()
    .doors(2)
    .passengers(2)
    .motor(
        makeMotor()
        .liters(4.0)
        .type('V8')
        .specifications()
    )
    .kind('pick-up')
    .switchEngine();

console.log(car.specifications()); 


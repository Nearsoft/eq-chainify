# eq-chainify
Library for creating objects and maintaning the chainning.

##Example
```js
     var myCar = makeCar().color('red').brand('nissan');

    myCar.specifications(); // { color: 'red', brand: 'nissan' }

    function makeCar() {
        var car = {};
        return chainify.call(car, { specifications: () => car })
            .field('color', 'white') // by default all cars are white
            .field('brand')
            .value();
    }
``` 



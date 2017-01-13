# eq-chainify
A Builder library that provides a simple way to create complex objects using chaining pattern.

##Example
```js
     var myCar = makeCar().color('red').brand('nissan');

    myCar.specifications(); // { color: 'red', brand: 'nissan' }

    function makeCar() {
        var car = {};
        return chainify.call(car, { specifications: () => car })
            .field('color', 'white') // by default all cars are white
            .field('brand')
            .method('switchEngine', () => car['on'] = !car['on'])
            .value();
    }
``` 



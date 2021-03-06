var expect = require('chai').expect;
var chainify = require('../src/chainify');

describe('Chainify `method`', () => {
    var config = {};
    var builder;

    before(() => {
        builder = chainify()
            .method('setTitle', x => config.title = `hello ${x}`)
            .value();
    });

    it('should add a method', () => {
        expect(builder).to.have.property('setTitle').to.be.a('function');
    });

    it('should set the title', () => {
        var result = builder.setTitle('Juan');
        expect(result).to.be.equal(builder);
        expect(config).to.have.property('title').to.be.equal('hello Juan');
    });
});

describe('Chainify `field`', () => {
    var builder;

    before(() => {
        var config = {};
        builder = chainify()
            .obj(config)
            .field('title', 'This is the default title')
            .value();
    });

    it('should have the default field value', () => {
        expect(builder.obj()).to.have.property('title').to.be.equal('This is the default title');
    });

    it('should set the title', () => {
        var result = builder.title("What's up Juan?");
        expect(result).to.be.equal(builder);
        expect(builder.obj()).to.have.property('title').to.be.equal("What's up Juan?");
    });
});

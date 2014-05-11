var expect = require('chai').expect;
var koa = require('koa');
var request = require('supertest');

var Backend, acc,app, store;

beforeEach(function() {
    Backend = require('../index').backendStub;
    acc = require('../index');
    app = koa();

    app.accountOptions = { backend: new Backend(store), secretKey: 'shhh' };
    acc(app);

});

it('Should have create method', function(done) {
    app.use(function* () {
        expect(this.acc.create).to.be.a('function');
        this.status = 200;
    });

    request(app.listen())
        .get('/')
        .expect(200, done)
});

it('Should have verify method', function(done) {
    app.use(function* () {
        expect(this.acc.verify).to.be.a('function');
        this.status = 200;
    });

    request(app.listen())
        .get('/')
        .expect(200, done)
});

it('Should have getResetToken method', function(done) {
    app.use(function* () {
        expect(this.acc.getResetToken).to.be.a('function');
        this.status = 200;
    });

    request(app.listen())
        .get('/')
        .expect(200, done)
});

it('Should have getUpdateToken method', function(done) {
    app.use(function* () {
        expect(this.acc.getUpdateToken).to.be.a('function');
        this.status = 200;
    });

    request(app.listen())
        .get('/')
        .expect(200, done)
});

it('Should have updateByToken method', function(done) {
    app.use(function* () {
        expect(this.acc.updateByToken).to.be.a('function');
        this.status = 200;
    });

    request(app.listen())
        .get('/')
        .expect(200, done)
});

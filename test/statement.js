import {expect, should as shouldLoad} from 'chai';
import Statement from '../src/statement';

const should = shouldLoad();

describe('Statement', () => {
    it('should be a class', () => {
        expect(Statement).to.be.a('function');
        should.Throw(() => Statement(), 'Cannot call a class as a function');
    });

    it('an instance should have a property "type" with the same value as initial', () => {
        const type = 'example';
        const args = [1, 2, 3];
        const st = new Statement(type, args);

        expect(st).to.have.property('type').to.equal(type);
    });

    it('an instance should have a property "args" with the same value as initial', () => {
        const type = 'example';
        const args = [1, 2, 3];
        const st = new Statement(type, args);

        expect(st).to.have.property('args').to.equal(args);
    });
});
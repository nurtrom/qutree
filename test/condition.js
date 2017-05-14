import {expect, should as shouldLoad} from 'chai';
import Condition from '../src/condition';

const should = shouldLoad();

describe('Condition', () => {
    it('should be a class', () => {
        expect(Condition).to.be.a('function');
        should.Throw(() => Condition(), 'Cannot call a class as a function');
    });

    it('an instance should have a property "type" with the same value as initial', () => {
        const type = 'example';
        const args = [1, 2, 3];
        const cond = new Condition(type, args);

        expect(cond).to.have.property('type').to.equal(type);
    });

    it('an instance should have a property "args" with the same value as initial', () => {
        const type = 'example';
        const args = [1, 2, 3];
        const cond = new Condition(type, args);

        expect(cond).to.have.property('args').to.equal(args);
    });
});
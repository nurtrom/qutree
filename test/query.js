import {expect, should as shouldLoad} from 'chai';
import query from '../src/query';
import Statement from '../src/statement'

const should = shouldLoad();

describe('Query', () => {
    describe('.where', () => {
        it('should return instance of Statement', () => {
            const st = query.where({foo: 'bar'}, {spam: 'eggs'});
            expect(st).to.be.instanceof(Statement);
        });

        it('property "type" of a returning statement should be equal "where"', () => {
            const st = query.where({foo: 'bar'}, {spam: 'eggs'});
            expect(st.type).to.be.equal('where');
        });
    });
});
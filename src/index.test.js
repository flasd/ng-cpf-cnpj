import proxyquire from 'proxyquire';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { CPF, CNPJ } from 'cpf_cnpj';

function resolve(partial) {
    return path.resolve(process.cwd(), partial);
}

function evalInContext(code, context) {
    return function () { return eval(code); }.call(context);
}

describe('ngCpfCnpj', () => {
    it('should work without exploding', () => {
        const file = fs.readFileSync(resolve('./src/index.js')).toString();
        
        const context = {
            angular: {
                module: stub().returns({
                    directive: spy(),
                }),
            },
        };

        evalInContext(file, context);

        expect(context.angular.module.called).to.be.true;
        expect(context.angular.module.calledWith('ngCpfCnpj', [])).to.be.true;
    });
    it('should bind the cpf directive to angular when window.CPF is present', () => {
        const file = fs.readFileSync(resolve('./src/index.js')).toString();

        const directive = spy();

        const context = {
            angular: {
                module: stub().returns({
                    directive,
                }),
            },
            CPF,
        };

        evalInContext(file, context);
        expect(context.angular.module.calledTwice).to.be.true;
        const args = directive.getCall(0).args;
        expect(args[0]).to.equal('ngCpf');
        expect(args[1]).to.be.a('function');

        const directiveConfig = eval(`(${args[1].toString()})()`);
        expect(directiveConfig).to.have.property('restrict', 'A');
        expect(directiveConfig).to.have.property('require', 'ngModel');
        expect(directiveConfig).to.have.property('link').which.is.a('function');
    });
    it('should bind the cnpj directive to angular when window.CNPJ is present', () => {
        const file = fs.readFileSync(resolve('./src/index.js')).toString();

        const directive = spy();

        const context = {
            angular: {
                module: stub().returns({
                    directive,
                }),
            },
            CNPJ,
        };

        evalInContext(file, context);
        expect(context.angular.module.calledTwice).to.be.true;
        const args = directive.getCall(0).args;
        expect(args[0]).to.equal('ngCnpj');
        expect(args[1]).to.be.a('function');

        const directiveConfig = eval(`(${args[1].toString()})()`);
        expect(directiveConfig).to.have.property('restrict', 'A');
        expect(directiveConfig).to.have.property('require', 'ngModel');
        expect(directiveConfig).to.have.property('link').which.is.a('function');
    });
});

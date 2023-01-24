// const chai = require('chai')
// global.expect = chai.expect
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');
const { expect } = require('chai');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'validParentheses.js'), {
    presets: ['env']
  }
);

const src = babelResult.code
jsdom({src})
// console.log(jsdom)

describe('validParentheses.js', () => {
    describe('isValid()', () => {
        it('isValid("()") returns true', () => { 
            expect(isValid("()")).to.equal(true)
        })

        it("testVariable's value is Hello World", () => {
          expect(testVariable).to.equal("Hello World")
        })
    })
})
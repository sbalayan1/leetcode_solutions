const majorityElement = require ('../majorityElement')

describe('majorityElement.js', () => {
    describe('majorityElement()', () => {
        test('works with single element arrays', () => {
            expect(majorityElement([1])).toStrictEqual(1)
        })

        test('works when the first number is the max', () => {
            expect(majorityElement([3,2,3])).toStrictEqual(3)
        })

        test('works when the max number changes midway through the array', () => {
            expect(majorityElement([2,2,1,1,1])).toStrictEqual(1)
        })

        test('works when the max number shifts twice through the array', () => {
            expect(majorityElement([2,2,1,1,1,2,2])).toStrictEqual(2)
        })

        test('works for more than 3 numbers in the array', () => {
            expect(majorityElement([2,2,1,1,1,3,3,2,2,2,2,2])).toStrictEqual(2)
        })
    })
})
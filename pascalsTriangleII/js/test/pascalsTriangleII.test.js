const getRow = require('../pascalsTriangleII')
jest.setTimeout(1000)

describe('pascalsTriangle.js', () => {
    describe('getRow()', () => {
        test('getRow(0) returns [1] for a rowIndex = 0', () => {
            expect(getRow(0)).toStrictEqual([1])
        })

        test('getRow(1) returns [1,1] for a rowIndex = 1', () => {
            expect(getRow(1)).toStrictEqual([1, 1])
        })

        test('getRow(2) returns [1,2,1] for a rowIndex = 2', () => {
            expect(getRow(2)).toStrictEqual([1, 2, 1])
        })

        test('getRow(4) returns [1, 4, 6, 4, 1] for a rowIndex = 4', () => {
            expect(getRow(4)).toStrictEqual([1, 4, 6, 4, 1])
        })
        
        test('getRow(30) does not timeout and returns [1,30,435,4060,27405,142506,593775,2035800,5852925,14307150,30045015,54627300,86493225,119759850,145422675,155117520,145422675,119759850,86493225,54627300,30045015,14307150,5852925,2035800,593775,142506,27405,4060,435,30,1]', () => {           
            const start = performance.now()
            getRow(30)
            const end = performance.now()
            expect(end - start).toBeLessThan(5000)
            expect(getRow(30)).toStrictEqual([1,30,435,4060,27405,142506,593775,2035800,5852925,14307150,30045015,54627300,86493225,119759850,145422675,155117520,145422675,119759850,86493225,54627300,30045015,14307150,5852925,2035800,593775,142506,27405,4060,435,30,1])
            
        })
    })
})
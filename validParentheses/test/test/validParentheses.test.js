const isValid = require('../validParentheses')
    describe('tests the isValid function', () => {
        test('checks if "()" is valid', () => {
            expect(isValid("()")).toEqual(true);
        });

        test('checks if "([{}]) is valid', () => {
            expect(isValid("([{}])")).toEqual(true)
            expect(isValid("([{}])")).toBeTruthy()
        })

        test('checks if "(" is valid', () => {
            expect(isValid("(")).toStrictEqual(false)
        })

        test('checks if "((((([] is valid', () => {
            expect(isValid("((((([]")).toEqual(false)
        })

        test('checks if "((] is valid', () => {
            expect(isValid("((]")).toBe(false)
            expect(isValid("((]")).toBeFalsy()
        })

        test('checks if "({[}}) is valid', () => {
            expect(isValid("({[}})")).toBe(false)
            expect(isValid("({[}})")).not.toBe(true)
        })

        test('checks if "" is valid', () => {
            expect(isValid("")).toBe(false)
            expect(isValid("")).not.toBe(true)
        })

        test('checks if "())" is valid', () => {
            expect(isValid("())")).toBe(false)
            expect(isValid("())")).not.toBe(true)
            expect(isValid("())")).toBeFalsy()
        })
    })


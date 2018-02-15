const verifyNumbers = require('./verifyNumbers.js')
describe('verifyNumbers',() => {
  it('returns false if an element is not type Number', () =>{
    expect(verifyNumbers(["a",1,2])).toBe(false)
    expect(verifyNumbers(["1",2,3])).toBe(false)
  })
  it('returns true if all elements are numbers', () =>{
    expect(verifyNumbers([1,2,3])).toBe(true)
  })
})

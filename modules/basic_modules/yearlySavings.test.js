const yearlySavings = require('./yearlySavings.js')
describe("yearlySavings",() => {
  it('throws an error on non-number values', () =>{
    expect(() => {yearlySavings("a","b")}).toThrow(TypeError)
    })
  it('computes the amount of money saved each year', () =>{
    expect(yearlySavings(10000,.10)).toBe(1000)
  })
})

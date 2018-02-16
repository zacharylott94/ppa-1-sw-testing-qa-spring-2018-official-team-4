const retirement = require('./retirement.js')

describe("retirement function", () =>{
  it("should accept 4 numbers and only numbers", () => {
    expect(() => {retirement(20,35000,.1,1000000)}).not.toThrow(TypeError("Numbers Only"))
    expect(() => {retirement("twenty",35000,.1,600000)}).toThrow(TypeError("Numbers Only"))
  })
  it('calculates the age the goal will be met', () =>{
    expect(retirement(20,35000,.3,600000)).toBe(63)
  })
  it('returns at most the age 99', () =>{
    expect(retirement(20,36300,.259,1000000)).toBe(99)
  })
  it('returns savings "savings goal not met if the goal age is 100 or more"', () =>{
    expect(retirement(20,36200,.259,1000000)).toBe("Savings goal not met.")
  })

})

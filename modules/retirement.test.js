const retirement = require('./retirement').retirement

describe("retirement function", () =>{
  it("should accept 4 numbers and only numbers", () => {
    expect(() => {retirement(20,35000,.1,1000000)}).not.toThrow(TypeError("That isn't a number!"))
    expect(() => {retirement("These","are","not","numbers")}).toThrow(TypeError("That isn't a number!"))
  })
  it('calculates the age the goal will be met', () =>{
    expect(retirement(20,35000,.3,600000)).toBe(63)
  })
  it('returns at most the age 99', () =>{
    expect(retirement(20,36300,.259,1000000)).toBe(99)
  })
  it('returns the string "Savings goal not met." if the goal age is 100 or more"', () =>{
    expect(retirement(20,36200,.259,1000000)).toBe("Savings goal not met.",100)
  })
  it('will type infer number strings', () =>{
    expect(retirement("20","36300",".259","1000000")).toBe(99)
  })
  it('throws an error if rate is greater than or equal to 1', () =>{
    expect(() => {retirement(20,35000,1,1000000)}).toThrow(Error("Savings rate cannot be greater than or equal to 1. Please use a decimal."))
    expect(() => {retirement(20,35000,.9999999,1000000)}).not.toThrow(Error("Savings rate cannot be greater than or equal to 1. Please use a decimal."))
  })
  it('throws an error if rate is less than or equal to zero', () =>{
    expect(() => {retirement(20,35000,0,1000000)}).toThrow(Error("Savings rate cannot be less than or equal to zero."))
    expect(() => {retirement(20,35000,-.1,1000000)}).toThrow(Error("Savings rate cannot be less than or equal to zero."))
    expect(() => {retirement(20,35000,.00001,1000000)}).not.toThrow(Error("Savings rate cannot be less than or equal to zero."))
  })
  it('throws an error if age is less than sixteen', () =>{
    expect(() => {retirement(0,35000,.1,1000000)}).toThrow(Error("Current age must be 16 or greater."))
    expect(() => {retirement(-20,35000,.1,1000000)}).toThrow(Error("Current age must be 16 or greater."))
    expect(() => {retirement(16,35000,.1,1000000)}).not.toThrow(Error("Current age must be 16 or greater."))
  })
  it('throws an error if age is greater than or equal to 100', () =>{
    expect(() => {retirement(100,35000,.1,1000000)}).toThrow(Error("Current age must be less than 100."))
    expect(() => {retirement(99,35000,.1,1000000)}).not.toThrow(Error("Current age must be less than 100."))
  })
  it('throws an error if salary is less than zero', () =>{
    expect(() => {retirement(20,-35000,.1,1000000)}).toThrow(Error("Salary must not be less than zero."))
    expect(() => {retirement(20,0,.1,1000000)}).not.toThrow(Error("Salary must not be less than zero."))
  })
  it('throws an error if goal is less than or equal to zero.', () =>{
    expect(() => {retirement(20,35000,.1,0)}).toThrow(Error("Savings goal must not be less than or equal to zero."))
    expect(() => {retirement(20,35000,.1,-10000)}).toThrow(Error("Savings goal must not be less than or equal to zero."))
    expect(() => {retirement(20,35000,.1,1)}).not.toThrow(Error("Savings goal must not be less than or equal to zero."))
  })
})

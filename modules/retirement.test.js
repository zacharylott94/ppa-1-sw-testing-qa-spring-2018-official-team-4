const retirement = require('./retirement.js')

describe("retirement function", () =>{
  it("should accept 4 numbers", () => {
    expect(() => {retirement(20,35000,.1,1000000)}).not.toThrow(TypeError)
    expect(() => {retirement("twenty",35000,.1,600000)}).toThrow(TypeError)
  })
  
})

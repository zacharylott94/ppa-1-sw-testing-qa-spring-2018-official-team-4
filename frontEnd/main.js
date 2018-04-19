//This does Vue stuff
new Vue({
  el:'#root',
  data: {
    retirement: {
      age: '',
      salary: '',
      rate: '',
      goal: '',
      result: ''
    }
  },
  methods: {
    calculateRetirement() {
      let age = Number(this.retirement.age)
      let salary = Number(this.retirement.salary)
      let rate = Number(this.retirement.rate)
      let goal = Number(this.retirement.goal)
      console.log(age)
      try {
        this.retirement.result = bundle.retirement(age, salary, rate, goal)
      }
      catch (err) {
        console.log(err)
        this.retirement.result = String(err)
      }
    }
  }
})

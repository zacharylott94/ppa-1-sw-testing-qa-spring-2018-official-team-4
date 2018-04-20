//This does Vue stuff
Vue.component('retirement',{
  template: `
  <div>
    <h3>Retirement Calculator</h3>
    <input type="text" placeholder="Age" v-model='age'>
    <input type="text" placeholder="Salary" v-model='salary'>
    <input type="text" placeholder="Interest Rate" v-model='rate'>
    <input type="text" placeholder="Investment Goal" v-model='goal'>
    <p>Retirement Age: {{result}}</p>
    <button @click='calculateRetirement'>Calculate!</button>
  </div>
  `,
  data() {
    return {
      age: '',
      salary: '',
      rate: '',
      goal: '',
      result: ''
    }
  },
  methods: {
    calculateRetirement() {
      let age = Number(this.age)
      let salary = Number(this.salary)
      let rate = Number(this.rate)
      let goal = Number(this.goal)
      try {
        this.result = bundle.retirement(age, salary, rate, goal)
      }
      catch (err) {
        this.result = String(err)
      }
    }
  }
})



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

  }
})

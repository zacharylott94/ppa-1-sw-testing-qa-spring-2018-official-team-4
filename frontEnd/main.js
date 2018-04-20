//This does Vue stuff
Vue.component('retirement',{
  template: `
    <div class='container'>
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

Vue.component('bmi',{
  template:`
    <div class='container'>
      <h3>BMI Calculator</h3>
      <input type="text" placeholder="height as 5'10'' format" v-model='height'>
      <input type="text" placeholder="weight in pounds" v-model='weight'>
      <p>Result: {{result}}</p>
      <button @click=calculateBMI>Calculate</button>
    </div>
  `,
  data() {
    return {
      height:'',
      weight:'',
      result:''
    }
  },
  methods: {
    calculateBMI() {
      try {
        this.result = bundle.bmi(this.height,Number(this.weight))
      }
      catch(err) {
        this.result = String(err)
      }
    }
  }
})


new Vue({
  el:'#root',
  template:`
    <div class="app">
      <header>
        <button class="button" @click='show("retirement")'>Retirement Calculator</button>
        <button class="button" @click='show("bmi")'>BMI Calculator</button>
      </header>
      <retirement v-show="components.retirement"></retirement>
      <bmi v-show="components.bmi"> </bmi>
    </div>
  `,
  data: {
    components:{
      retirement:true,
      bmi:false
    }
  },


  methods: {
    show(component) {
      console.log(component)
      for (let each of Object.keys(this.components)){
        this.components[each] = false
      }
      this.components[component] = true
    }
  }

})

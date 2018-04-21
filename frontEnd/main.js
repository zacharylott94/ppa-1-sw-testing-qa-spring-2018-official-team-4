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

Vue.component('distance', {
  template:`
    <div class='container'>
      <h3>Distance Calculator</h3>
      <input type="text" placeholder="X1" v-model="X1" />
      <input type="text" placeholder="y1" v-model="Y1" />
      <input type="text" placeholder="X2" v-model="X2" />
      <input type="text" placeholder="Y2" v-model="Y2" />
      <p>The distance is: {{result}}</p>
      <button class="button" @click=calculate>Calculate!</button>
    </div>
  `,
  data() {
    return {
      X1: '',
      Y1: '',
      X2: '',
      Y2: '',
      result: '',
    }
  },
  methods: {
    calculate() {
      try{
        this.result = bundle.distance(
          this.X1,
          this.Y1,
          this.X2,
          this.Y2
        )
      }
      catch(err){
        this.result = String(err)
      }
    }
  }
})

new Vue({
  el:'#root',
  data: {
    components:{
      retirement:true,
      bmi:false,
      distance:false,
    }
  },


  methods: {
    show(component) {
      for (let each of Object.keys(this.components)){
        this.components[each] = false
      }
      this.components[component] = true
    }
  }

})

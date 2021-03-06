//This does Vue stuff
const Vue = bundle.Vue
Vue.component('retirement',{
  template: `
    <div class='container'>
      <h3>Retirement Calculator</h3>
      <input type="text" name="age" placeholder="Age" v-model='age'>
      <input type="text" name="salary" placeholder="Salary" v-model='salary'>
      <input type="text" name="rate" placeholder="Interest Rate" v-model='rate'>
      <input type="text" name="goal" placeholder="Investment Goal" v-model='goal'>
      <p name="rresult">Retirement Age: {{result}}</p>
      <button name="rbutton"  @click='calculateRetirement'>Calculate!</button>
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
      <input type="text" name="height" placeholder="height as 5'10'' format" v-model='height'>
      <input type="text" name="weight" placeholder="weight in pounds" v-model='weight'>
      <p name="bresult">Result: {{result}}</p>
      <button name="bbutton" @click=calculateBMI>Calculate!</button>
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
      <input type="text" name="x1" placeholder="X1" v-model="X1" />
      <input type="text" name="y1" placeholder="y1" v-model="Y1" />
      <input type="text" name="x2" placeholder="X2" v-model="X2" />
      <input type="text" name="y2" placeholder="Y2" v-model="Y2" />
      <p name="dresult">The distance is: {{result}}</p>
      <button name="dbutton" class="button" @click=calculate>Calculate!</button>
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
          Number(this.X1),
          Number(this.Y1),
          Number(this.X2),
          Number(this.Y2)
        )
      }
      catch(err){
        this.result = String(err)
      }
    }
  }
})

Vue.component('email', {
  template:`
    <div class="container">
      <h3>Email Verifier</h3>
      <input type="text" name="email" placeholder='email@address.com' v-model='email' />
      <p name="eresult">{{result}}</p>
      <button name="ebutton" class="button" @click=calculate>Verify!</button>
    </div>
  `,
  data() {
    return {
      email: '',
      result: 'Please type an email address above.'
    }
  },
  methods: {
    calculate() {
      try{
        this.result = bundle.email(this.email)
        if (this.result) {
          this.result = "This is a valid email address."
        }
      }
      catch(err){
        this.result = String(err)
      }
    }
  }
})

Vue.component('split',{
    template:`
      <div class="container">
        <h3>Tip Split Calculator</h3>
        <input type="text" name="numGuest" placeholder="Number of Guests" v-model='guests' />
        <input type="text" name="cost" placeholder="Total Cost" v-model='cost' />
        <p name="sresult">Each person pays: {{result}}</p>
        <button name="sbutton" class="button" @click=calculate>Calculate!</button>
      </div>
    `,
    data() {
      return {
        guests: '',
        cost: '',
        result: ''
      }
    },
    methods: {
      calculate() {
        try{
          this.result = bundle.splitTip(Number(this.guests),
                                        Number(this.cost))
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
      email:false,
      split:false,
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
